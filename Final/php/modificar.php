<?php
include("conexion.php");
        
        $parid      =$_POST['par1'];
        $titulo     = $_POST['titulo1'];
        $raiting    = $_POST['raiting1'];
        $duracion   = $_POST['duracion1'];
        $resena     =$_POST['resena1'];
        $director   = $_POST['director1'];
        $clasificacion = $_POST['clasificacion1'];
        $generos    = $_POST['generos1'];
        $audio      = $_POST['audio1'];
       
        try{
            $sql = "UPDATE peliculas 
                    SET    titulo='$titulo',
                           raiting='$raiting',
                           duracion='$duracion',
                           resena='$resena',
                           director='$director',
                           clasificacion='$clasificacion',
                           generos='$generos',
                           audio='$audio' 
                    WHERE id_pelicula=".$parid;
                    
            $query = $con->prepare($sql);
            $query->execute();
            $query->closeCursor();
  
        }catch(PDOException $e) {
            echo "Error de consulta a la base de datos";
            echo $e->getMessage();

    }   
?>