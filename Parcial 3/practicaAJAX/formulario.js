$(document).ready(function(){
            
    $('#btn2').click(function(){
        swal({
             icon: "success", timer: 1500, title: 'Listo'
            });
    })

    $('#btnModal').click(function(){
    $('#myModal').modal();
    })

   $('#btnAlert').click(function(){
    $('#myAlert').show();
    //$('#myAlert').toggleClass("collapse");
   })

   $('#alertClose').click(function(){
    $('#myAlert').hide();
   //$('#myAlert').toggleClass("collapse");
   })

   $('#btn1').click(function(){
    swal("Se canceló la operación.", {
        timer:1500
     });
    })
   
    $('#botonAjax').click(function(){
      var solicitud = new XMLHttpRequest();                                       //Crear objeto XMLHttpRequest

      solicitud.onreadystatechange = function() {                                 // En esta propiedad declaramos la funcion a ejecutar
                                                                                  // cuando cambie el status del objeto XMLHttpRequest

      if (solicitud.readyState == 4 && solicitud.status == 200) {                 // La respueta esta lista
          document.getElementById("myH1").innerHTML = solicitud.responseText;    // La propiedad responseText tiene la respuesta en texto
    }};

          solicitud.open("GET", "formulario2.txt", true);
          solicitud.send();
    })

  })

  
  
  //data-dismiss="alert" lo elimina del documento, collapse lo esconde.