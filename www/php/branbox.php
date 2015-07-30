<?php 
include 'config.php';
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));
    $reUsable = mysql_real_escape_string($data->branboxVariable);
    $arrayData = array();
    if($reUsable == 'aboutUs'){
        $query = mysql_query("select * from about");
        while($row=mysql_fetch_array($query)){
            $arrayData = $row;
        }
        print json_encode($arrayData);
    }else if($reUsable == 'saveUserData'){
        $data = json_decode(file_get_contents("php://input"));
        $email = mysql_real_escape_string($data->email);
        $businessId = mysql_real_escape_string('new');
        $firstname = mysql_real_escape_string($data->firstName);
        $lastName = mysql_real_escape_string($data->lastName);
        $password = mysql_real_escape_string($data->password);
        $confirmPassword = mysql_real_escape_string($data->confirmPassword);
        $dob = mysql_real_escape_string($data->dob);
        $gender = mysql_real_escape_string($data->gender);
        $telephoneNo = mysql_real_escape_string($data->telephoneNo);
        $mobleNo = mysql_real_escape_string($data->mobleNo);
        $address1 = mysql_real_escape_string($data->address1);
        $address2 = mysql_real_escape_string($data->address2);
        $city = mysql_real_escape_string($data->city);
        $country = mysql_real_escape_string($data->country);
        $postCode = mysql_real_escape_string($data->postCode);
        $query = "INSERT INTO enduser(businessId,firstName,lastName,password,confirmPassword,gender,dateOfBirth,address1,address2,city,country,postalCode,phoneNumber,telephone,email) values('$businessId','$firstname','$lastName','$password','$confirmPassword','$gender','$dob','$address1','$address2','$city','$country','$postCode','$mobleNo','$telephoneNo','$email')";
        $queryResult = mysql_query($query);
    }else if($reUsable == 'contactUs'){
        $query = mysql_query("SELECT * FROM business WHERE brandName='pravinkumar'");
        while($row=mysql_fetch_array($query)){
            $arrayData = $row;
        }
        print json_encode($arrayData);
    }else if($reUsable == 'latestoffer'){
        $query = mysql_query("SELECT * FROM offer WHERE businessId='0'");
        while($row=mysql_fetch_array($query)){
            $arrayData[] = $row;
        }
        print json_encode($arrayData);
    }else if($reUsable == 'location'){
        $query = mysql_query("SELECT * FROM businesslocation WHERE businessId='0'");
        while($row=mysql_fetch_array($query)){
            $arrayData[] = $row;
        }
        print json_encode($arrayData);
    }
?>