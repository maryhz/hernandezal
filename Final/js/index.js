$(document).ready(function(){
    
    $('#btnModal').click(function(){
    $('#myModal').modal();
    });

   

   $('#alertClose').click(function(){
    $('#myAlert').hide();
   //$('#myAlert').toggleClass("collapse");
   });

  
   
  
    
//FUNCIÓN DE CONSULTAR
$('#btnConsultar').click(function() {
     parid=prompt("Teclee el ID a consultar");

    $.post('./php/getRegistroBD.php',{par1:parid},function(data){
      refrescar(data);
      },'json');
});

//FUNCIÓN DE ELIMINAR
$("#btnSi").click( function() {
  $('#myModal2').modal();
  $('#myAlert').show();
  let parid=$('#id_pelicula').val();
        $.post('./php/eliminar.php',{par1:parid},function(data){
            refrescar(data);
        },'json');
        
        
});

//FUNCIÓN DE AGREGAR
$('#btnAceptar').click(function() {
  $('#myModal').modal();
  let titulo = $('#idTitulo').val();
  let raiting =  $('#idRaiting').val();
  let duracion = $('#idDuracion').val();
  let resena = $('#idReseña').val();
  let director = $('#idDirectores').val();
  let clasificacion = $('#idClasificacion').val();
  let generos = $('#idGeneros').val();
  let audio =$('#idAudio').val();
  $.post('./php/agregar.php',{titulo1:titulo,raiting1:raiting,duracion1:duracion,resena1:resena,director1:director,clasificacion1:clasificacion,generos1:generos,audio1:audio
  },'json');
  
  
});

//FUNCIÓN DE MODIFICAR
$('#btnYes').click(function() {
  $('#myModal3').modal();
  let titulo = $('#idTitulo').val();
  let raiting =  $('#idRaiting').val();
  let duracion = $('#idDuracion').val();
  let resena = $('#idReseña').val();
  let director = $('#idDirectores').val();
  let clasificacion = $('#idClasificacion').val();
  let generos = $('#idGeneros').val();
  let audio =$('#idAudio').val();

  $.post('./php/modificar.php',{par1:parid,titulo1:titulo,raiting1:raiting,duracion1:duracion,resena1:resena,director1:director,clasificacion1:clasificacion,generos1:generos,audio1:audio
  },'json');
  
});


function refrescar(data) {
  console.log(data);
  $('#id_pelicula').val(data.id_pelicula);
  $('#idTitulo').val(data.titulo);
  $('#idRaiting').val(data.raiting);
  $('#idDuracion').val(data.duracion);
  $('#idReseña').val(data.resena);
  $('#idDirectores').val(data.director);
  $('#idClasificacion').val(data.clasificacion);
  $('#idGeneros').val(data.generos);
  $('#idAudio').val(data.audio);
}

})


 


  

  







  //fetch
  //data-dismiss="alert" lo elimina del documento, collapse lo esconde.