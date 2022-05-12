<?php

$registro['idTitulo'] = 'Harry Potter';
$registro['idRaiting'] = '8';
$registro['idDuracion'] = '148';
$registro['idReseña'] = 'El niño que vivio...';
$registro['idDirectores'] = 'David Yates';
$registro['idClasificacion'] = 'PG-13';
$registro['idGeneros'] = 'Fantasía';
$registro['idAudio'] = 'Español Latino';

$registroJson = json_encode($registro);
echo $registroJson;

?>