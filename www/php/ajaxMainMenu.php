<?php
    include 'config.php';
    //$businessId=$_POST['businessId'];

    $sql1="SELECT * FROM `manimenu` WHERE `businessId`=1";
    $res=mysql_query($sql1);
if($res>0){
    while($row=mysql_fetch_array($res))
    {
        $rows[]=$row;
    }

    echo json_encode(array('rows' => $rows));
}
else
echo '{"error":"error"}';
?>