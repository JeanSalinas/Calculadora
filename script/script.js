const resultado = document.getElementById('resultado')
const alerta = document.getElementById('alerta')

function calcular(operacion) {

    let n1 = parseFloat(document.getElementById('numeroUno').value)
    let n2 = parseFloat(document.getElementById('numeroDos').value)

    alerta.textContent = ''
    resultado.value = ''

    if (isNaN(n1) || isNaN(n2)) {
        return alerta.textContent = 'Por favor, diligencie los dos campos 👍'
    }

    if (operacion === 'division' && n2 == 0) {
        return alerta.textContent = 'No se puede dividir entre cero 🤡'
    }

    const operaciones = {
        suma: n1 + n2,
        resta: n1 - n2,
        multiplicacion: n1 * n2,
        division: n1 / n2
    }
    resultado.value = operaciones[operacion]
}

function limpiar() {
    resultado.value = ''
    alerta.textContent = ''
    document.getElementById('numeroUno').value = ''
    document.getElementById('numeroDos').value = ''
}