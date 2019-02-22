<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>



<input type="text" id="a">



<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" />
    <script type="text/javascript">
            $(document).ready(function(){
                $("#a").autocomplete({
                    source:'abc.php',
                    minLength:1
                });
            });
 </script>
</body>
</html>