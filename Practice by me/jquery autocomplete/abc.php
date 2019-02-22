
<?php 

if(isset($_GET['term'])) 
{
  $return_arr = array('Generate Ideas', 'Define Products');
}
echo json_encode($return_arr);

 ?>