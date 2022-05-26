<?php
$id=2;

$hostname = "localhost";
$username = "mentos";
$password = "";
$database = "peliculasDB";


try{

    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);

} catch(PDOException $e){
    echo "error fatal";
    echo $e->getMessage();
    exit();
}



//$con->setAttribute(PDO::ATT_ERRMODE,PDO::ERRMODE_EXCEPTION);



try{

    $consultaSql = "Select * from peliculas where id_pelicula=" .$id;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();



}catch(PDOException $e){
    echo "Error d la consulta";
    echo $e->getMessage();
}



$resultadoJSON = json_encode($resultado);

echo $resultadoJSON;

?>

