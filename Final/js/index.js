$(document).ready(function(){
            
    $('#btn2').click(function(){
        swal({
             icon: "success", timer: 1500, title: 'Listo'
            });
    });

    $('#btnModal').click(function(){
    $('#myModal').modal();
    });

   $('#btnAlert').click(function(){
    $('#myAlert').show();
    //$('#myAlert').toggleClass("collapse");
   });

   $('#alertClose').click(function(){
    $('#myAlert').hide();
   //$('#myAlert').toggleClass("collapse");
   });

   $('#btn1').click(function(){
    swal("Se canceló la operación.", {
        timer:1500
     });
    });
   
  
    

  $('#btnConsultaBD').click(function() {
    let parid=prompt("Teclee el ID a consultar");

    $.post('./php/getRegistroBD.php',{par1:parid},function(data){
      refrescar(data);
      },'json');
});

  
  
  function refrescar(data) {
    //console.log(data);
    $('#idTitulo').val(data.titulo);
    $('#idRaiting').val(data.raiting);
    $('#idDuracion').val(data.duracion);
    $('#idReseña').val(data.reseña);
    $('#idDirectores').val(data.director);
    $('#idClasificacion').val(data.clasificacion);
    $('#idGeneros').val(data.generos);
    $('#idAudio').val(data.audio);
}

})


 


  

  







  //fetch
  //data-dismiss="alert" lo elimina del documento, collapse lo esconde.