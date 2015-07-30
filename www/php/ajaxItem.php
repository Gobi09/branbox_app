<?php
    include 'config.php';
    //$businessId=$_POST['businessId'];

$menuId=$_GET['menuId'];
$subMenuId=$_GET['subMenuId'];
$item=$_GET['itemId'];

      $sql1="SELECT * FROM `submenuitem` WHERE `businessId`=1 and menuId='$menuId'and subMenuId='$subMenuId' and id='$item'";

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