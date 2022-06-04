<?php
include("conexion.php");

try {
$consultaSql = "Select * from peliculas where id_pelicula=".$parid;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

$resultadoJSON = json_encode($resultado);
echo $resultadoJSON;
?>