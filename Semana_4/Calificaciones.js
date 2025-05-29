// variables
let calificaciones = [];

// agregar calificación
function agregarCalificacion() {
    const input = document.getElementById('calificacion');
    const valor = input.value;
    
    // número entre 0 y 10
    if (valor >= 0 && valor <= 10) {
        calificaciones.push(valor);
        actualizarLista();
        input.value = '';
    } else {
        alert('Ingrese una nota entre 0 y 10');
    }
}

// actualizar lista
function actualizarLista() {
    const lista = document.getElementById('listaCalificaciones');
    lista.innerHTML = '';
    calificaciones.forEach(calificacion => {
        const li = document.createElement('li');
        li.textContent = calificacion;
        lista.appendChild(li);
    });
}

// calcular promedio
function calcularPromedio() {
    if (calificaciones.length === 0) {
        alert('No hay calificaciones ingresadas');
        return;
    }

    const suma = calificaciones.reduce((total, calificacion) => total + parseFloat(calificacion), 0);
    const promedio = suma / calificaciones.length;
    
    // actualizar promedio
    document.getElementById('promedio').textContent = promedio.toFixed(2);

    // resultado
    const resultadoElement = document.getElementById('resultado');
    if (promedio >= 7) {
        resultadoElement.textContent = 'Aprobado';
    } else {
        resultadoElement.textContent = 'Reprobado';
    }
}
