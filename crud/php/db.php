<?php

function Createdb(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "spacetrikinfotech";

    // create connection
    $con = mysqli_connect($servername, $username, $password);

    // Check Connection
    if (!$con){
        die("Connection Failed : " . mysqli_connect_error());
    }

    // create Database
    $sql = "CREATE DATABASE IF NOT EXISTS $dbname";

    if(mysqli_query($con, $sql)){
        $con = mysqli_connect($servername, $username, $password, $dbname);

        $sql = "
                        CREATE TABLE IF NOT EXISTS programmer(
                            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            prog_name VARCHAR (25) NOT NULL,
                            prog_add VARCHAR (25) NOT NULL,
                            prog_sal FLOAT,
                            prog_dob DATE,
                            prog_doj DATE,
                            prog_gender char(1) not null check(prog_gender in ('m','f','o'))
                        );
        ";

        if(mysqli_query($con, $sql)){
            return $con;
        }else{
            echo "Cannot Create table...!";
        }

    }else{
        echo "Error while creating database ". mysqli_error($con);
    }

}
