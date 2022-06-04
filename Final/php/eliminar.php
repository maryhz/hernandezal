<?php
include("conexion.php");
    
    try{
      $sql = "DELETE FROM peliculas WHERE id_pelicula=".$parid;
      $query = $con->prepare($sql);
      $query->execute();
      $result = $query->fetch(PDO::FETCH_ASSOC);
      $query->closeCursor();

  }catch(PDOException $e) {
      echo "Error de consulta a la base de datos";
      echo $e->getMessage();
  }

 
 ?>