<?php
    include 'config.php';
    //$businessId=$_POST['businessId'];

    $sql1="SELECT * FROM `submenu` WHERE `businessId`=1";
$sql= "SELECT s.id,s.name,s.menuId,s.image, j.id,j.name,j.image,j.price,j.garnish,j.tax,j.offers FROM submenu s INNER JOIN submenuitem j ON s.businessId = j.businessId  and s.menuId= j.menuId and s.id=j.subMenuId and s.status='ON' where  s.businessId='1'";
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