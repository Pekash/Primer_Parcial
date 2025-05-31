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
    resultadoElement.className = promedio >= 7 ? 'aprobado' : 'reprobado';
    resultadoElement.textContent = promedio >= 7 ? 'Aprobado' : 'Reprobado';
}

// Funciones para Collatz
function calcularCollatz() {
    const input = document.getElementById('numeroCollatz');
    const resultado = document.getElementById('resultadoCollatz');
    const numero = parseInt(input.value);
    let resultadoTexto = "";

    if (isNaN(numero) || numero <= 0) {
        resultado.innerHTML = "Por favor ingrese un número positivo";
        return;
    }

    let secuencia = numero;
    resultadoTexto += `${secuencia}`;

    while (secuencia !== 1) {
        if (secuencia % 2 === 0) {
            resultadoTexto += `<br>${secuencia} / 2 = ${secuencia / 2}`;
            secuencia = secuencia / 2;
        } else {
            resultadoTexto += `<br>${secuencia} * 3 + 1 = ${secuencia * 3 + 1}`;
            secuencia = secuencia * 3 + 1;
        }
    }

    resultado.innerHTML = resultadoTexto;
    input.value = "";
}

// Funciones para edad
function validarEdad() {
    const edad = document.getElementById("inputEdad").value;
    const resultado = document.getElementById("resultadoEdad");
    if (edad >= 18) {
        resultado.textContent = "Eres mayor de edad";
    } else {
        resultado.textContent = "Eres menor de edad";
    }
}
