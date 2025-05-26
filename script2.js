//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100

function validar(){
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    
    const cuerpoTabla = document.getElementById('cuerpoTabla').value;
    const  nuevaFila = cuerpoTabla.insertCrow();

    nuevaFila.insertCell(0).innerText = nombre;
    nuevaFila.insertCell(1).innerText = edad;
    const celdaAccion = nuevaFila.insertCell(2);


}