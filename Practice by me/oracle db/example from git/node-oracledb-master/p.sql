-- select * from emp;

CREATE OR REPLACE PROCEDURE p1 
  IS
BEGIN
	a number(5);
   dbms_output.put_line('hellow world');
	a=:20;
	dbms_output.put_line(a);

	COMMIT;   

END;
/

execute p1;