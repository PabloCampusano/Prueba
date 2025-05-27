function validar() {
    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const errorNombre = document.getElementById('errorNombre');
    const errorEdad = document.getElementById('errorEdad');

    let valido = true;

    if (nombre === '') {
        errorNombre.textContent = 'Ingrese un nombre';
        valido = false;
    } else {
        errorNombre.textContent = '';
    }

    if (isNaN(edad) || edad < 18 || edad > 99) {
        errorEdad.textContent = 'Ingresa una edad valida';
        valido = false;
    } else {
        errorEdad.textContent = '';
    }

    if (!valido) return;

    const tabla = document.getElementById('cuerpoTabla');
    const fila = tabla.insertRow();

    fila.insertCell().textContent = nombre;
    fila.insertCell().textContent = edad;

    const celdaAccion = fila.insertCell();

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = () => {
        if (confirm('¿Quieres eleminar este registro?')) {
            tabla.deleteRow(fila.rowIndex - 1);
        }
    };

    const btnActualizar = document.createElement('button');
    btnActualizar.textContent = 'Actualizar';
    btnActualizar.onclick = () => {
        document.getElementById('nombre').value = nombre;
        document.getElementById('edad').value = edad;
        tabla.deleteRow(fila.rowIndex - 1);
    };
    
    celdaAccion.appendChild(btnEliminar);
    celdaAccion.appendChild(btnActualizar);

    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
}
