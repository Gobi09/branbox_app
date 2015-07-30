<?php
date_default_timezone_get('Asia/Calcutta');
date_default_timezone_set('Asia/Calcutta');
$host="localhost"; // Host name
$username="root"; // Mysql username
$password=""; // Mysql password
$db_name="branbox"; // Database name
$con = mysql_connect("$host", "$username", "$password")or die("cannot connect");
$db = mysql_select_db("$db_name", $con) or die("cannot select DB");
?>