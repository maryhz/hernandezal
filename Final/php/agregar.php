<?php
include ("conexion.php");

        $titulo = $_POST['titulo1'];
        $raiting = $_POST['raiting1'];
        $duracion = $_POST['duracion1'];
        $resena =$_POST['resena1'];
        $director = $_POST['director1'];
        $clasificacion = $_POST['clasificacion1'];
        $generos = $_POST['generos1'];
        $audio = $_POST['audio1'];
        
        try{
       
            $sql = "INSERT INTO peliculas (titulo, raiting, duracion, resena, director, clasificacion, generos, audio)
            VALUES('$titulo', '$raiting', '$duracion', '$resena', '$director', '$clasificacion', '$generos','$audio')";
            $query = $con->prepare($sql);
            $query->execute();
            $query->closeCursor();
        
        }catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
  
    //$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}
 
?>