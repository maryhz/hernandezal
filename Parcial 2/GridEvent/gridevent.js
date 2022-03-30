window.onload=function(){
        
    var element = document.getElementById("idcontene");
   element.addEventListener("click",function(evento){
           console.log(evento.target.id);

           if(document.getElementById(evento.target.id).classList.contains("caja")){
               document.getElementById(evento.target.id).classList.toggle("cajaCyan");
           }

           
       });
   
   /*
       var element = document.getElementById("idcontene")
       element.addEventListener("click",cambiarCaja);
       function cambiarCaja(evento){
       console.log(evento.target.id);
           document.getElementById(evento.target.id).classList.toggle("cajaCyan");

           if(evento.target.id=="caja9"){
               element.removeEventListener("click",cambiarCaja);
               
           }
        
   }
   */ 


   /*
       var element = document.getElementById("idcontene");
       element.addEventListener("click",cambiarCaja);
       function cambiarCaja(evento){
       console.log(evento.target.id);
           document.getElementById(evento.target.id).classList.toggle("cajaCyan");
   }
   */   
   
   
   }