<?php
    $parid = $_POST['par1'];

    $hostname='localhost';
    $database='peliculasDB';
    $username='mentos';
    $password='';
    $port='3306';
    
    try {
        $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
    } catch(PDOException $e) {
        echo "Error de conexion a la base de datos";
        echo $e->getMessage();
        exit();
    }
?>