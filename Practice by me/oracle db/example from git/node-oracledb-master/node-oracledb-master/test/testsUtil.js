/* Copyright (c) 2018, Oracle and/or its affiliates. All rights reserved. */

/******************************************************************************
 *
 * You may not use the identified files except in compliance with the Apache
 * License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * The node-oracledb test suite uses 'mocha', 'should' and 'async'.
 * See LICENSE.md for relevant licenses.
 *
 * NAME
 *   testsUtil.js
 *
 * DESCRIPTION
 *   The utility functions for tests.
 *
 *****************************************************************************/
'use strict';

const oracledb = require('oracledb');
const dbconfig = require('./dbconfig.js');
const assert = require('assert');
const should = require('should');

let testsUtil = exports;
module.exports = testsUtil;

testsUtil.assertThrowsAsync = async function(fn, RegExp) {
  let f = () => {};
  try {
    await fn();
  } catch(e) {
    f = () => { throw e; };
  } finally {
    assert.throws(f, RegExp);
  }
};

testsUtil.checkPrerequisites = async function(clientVersion=1803000000, serverVersion=1803000000) {
  if (oracledb.oracleClientVersion < clientVersion) return false;
  try {
    let connection = await oracledb.getConnection(dbconfig);
    if (connection.oracleServerVersion < serverVersion) return false;
    await connection.close();
    return true;
  } catch(err) {
    console.log('Error in checking prerequistes:\n', err);
  }
};

testsUtil.generateRandomPassword = function(length=6) {
  let result = "";
  const choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += choices.charAt(Math.floor(Math.random() * choices.length));
  }
  return result;
};

testsUtil.getDBCompatibleVersion = async function() {
  let compatibleVersion;
  if (dbconfig.test.DBA_PRIVILEGE) {
    try {
      const connectionDetails = {
        user          : dbconfig.test.DBA_user,
        password      : dbconfig.test.DBA_password,
        connectString : dbconfig.connectString,
        privilege     : oracledb.SYSDBA,
      };
      let conn = await oracledb.getConnection(connectionDetails);
      let res = await conn.execute("select name, value from v$parameter where name = 'compatible'");
      if(res.rows.length > 0) {
        compatibleVersion = res.rows[0][1];
      }
      await conn.close();
    } catch (err) {
      should.not.exist(err);
    }
  }
  return compatibleVersion;
};

// Function versionStringCompare returns:
// * 1 if version1 is greater than version2
// * -1 if version1 is smaller than version2
// * 0 if version1 is equal to version2
// * undefined if eigher version1 or version2 is not string
testsUtil.versionStringCompare = function(version1, version2) {
  if (typeof version1 === 'string' && typeof version2 === 'string') {
    let tokens1 = version1.split('.');
    let tokens2 = version2.split('.');
    let len = Math.min(tokens1.length, tokens2.length);
    for (let i = 0; i < len; i++) {
      const t1 = parseInt(tokens1[i]), t2 = parseInt(tokens2[i]);
      if (t1 > t2) return 1;
      if (t1 < t2) return -1;
    }
    if (tokens1.length < tokens2.length) return 1;
    if (tokens1.length > tokens2.length) return -1;
    return 0;
  }
  return undefined;
};
