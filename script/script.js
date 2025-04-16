function calcular(operacion) {
    let numero1 = parseFloat(document.getElementById('numero1').value)
    let numero2 = parseFloat(document.getElementById('numero2').value)
    const alerta = document.getElementById('alerta')
    const resultadoInput = document.getElementById('resultado')

    alerta.textContent = ''
    resultadoInput.value = ''

    if (isNaN(numero1) || isNaN(numero2)) {
        alerta.textContent = 'Por favor, diligencie los dos campos 🤡'
        return;
    }

    if (operacion === 'division' && numero2 == 0) {
        alerta.textContent = 'No se puede dividir entre cero! ❌'
        return
    }
    const operaciones = {
        suma: numero1 + numero2,
        resta: numero1 - numero2,
        multiplicacion: numero1 * numero2,
        division: numero1 / numero2
    }
    resultadoInput.value = operaciones[operacion]
}