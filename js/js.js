var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
}

//+++++++++++++++++++++++++++++++++++

var asiento = document.getElementById('mostrar')
var name = document.getElementById("nombre").value;
var resultado = document.getElementById('mostrar');
resultado.innerHTML=name;

var apell= document.getElementById("apellido").value;
var identidad = document.getElementById('dni').value;
    
function buscar() {
    var name = document.getElementById("nombre").value;
    var apell= document.getElementById("apellido").value;
    var identidad = document.getElementById('dni').value;
    document.getElementById("nombre").innerHTML=name;    
}
function reservar() {
    


}