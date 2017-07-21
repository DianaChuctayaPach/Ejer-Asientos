var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
var numAsientos;

function redirect(event){
    numAsientos = event.target.textContent ;
    var asiento=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=asiento;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#6973AD';
}
   var N = 32; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = ' ';
   }

   
    var buscaDni = document.getElementById('ingresadni').value;
    var name = document.getElementById("nombre").value;
    
    var apell= document.getElementById("apellido").value;
    var identidad = document.getElementById('dni').value;
    
function buscar() {
    // var asiento =celdas;
    document.getElementById("nombre").innerHTML=name;
    document.getElementById('apellido').innerHTML=apell;
    document.getElementById('dni').innerHTML=identidad;
}
function reservar() {
    var asiento =parseInt(numAsientos);
    var name = document.getElementById("nombre").value;
    var apell= document.getElementById("apellido").value;
    var identidad = document.getElementById('dni').value;
     asientos[asiento] = {
               nombre : name,
               apellido :apell,
               asientoOcupado :asiento,
               dni: identidad
    }
    document.getElementById('usuario').innerHTML= asiento+'<br>'+name +'<br>'+ apell +'<br>'+identidad;

 
}
function cancelar() {
    if (buscaDni =asientos.dni)
     asientos[asiento] = {
               nombre : name,
               apellido :apell,
               asientoOcupado :asiento,
               dni: identidad
    }

    
}
function limpiar(){
document.getElementById('usuario').innerHTML=' ';
}