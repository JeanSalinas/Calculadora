function pedirNumero() {
    let numero1, numero2
    do {
        numero1 = parseInt(prompt('Digite el valor del primer numero'))
        numero2 = parseInt(prompt('Digite el valor del segundo numero'))
    } while (isNaN(numero1) || isNaN(numero2))
    return { numero1, numero2 }
}

function calculadora() {
    console.log("Calculadora")
    let operacion
    do {
        operacion = parseInt(prompt("Escoge una operación: \n1 Suma\n2 Resta\n3 multiplicacion\n4 Division"))

    } while (isNaN(operacion) || operacion < 1 || operacion > 4)

    const { numero1, numero2 } = pedirNumero()
    let resultado, simbolo, nombreOperacion

    switch (operacion) {
        case 1:
            resultado = numero1 + numero2
            simbolo = '+'
            nombreOperacion = "Suma"
            break;
        case 2:
            resultado = numero1 - numero2
            simbolo = '-'
            nombreOperacion = "Resta"
            break;
        case 3:
            resultado = numero1 * numero2
            simbolo = '*'
            nombreOperacion = "Multiplicación"
            break;
        case 4:
            if (numero2 === 0) {
                console.log('no se puede dividir entre cero')
                return;
            }
            resultado = numero1 / numero2
            simbolo = '/'
            nombreOperacion = "División"
            break;
    }
    console.log(`Escogiste la operacion ${nombreOperacion}`)
    console.log(`El resultado de la operacion ${numero1} ${simbolo} ${numero2} = ${resultado}`)
}

function tablaMultiplicacion() {
    let numero, resultado
    do {
        numero = parseInt(prompt('Que tabla de multiplicar deseas aprender'))
    } while (isNaN(numero))

    for (let i = 0; i <= 10; i++) {
        resultado = numero * i
        console.log(`${numero} * ${i} = ${resultado}`)
    }
}

function menu() {
    let ejercicios

    do {
        ejercicios = parseInt(prompt('Que ejercicio deseas evaluar \n1 Tablas de multiplicar\n2 Calculadora\n3 Salir'))
    }
    while (isNaN(ejercicios) || ejercicios < 1 || ejercicios > 3)
    switch (ejercicios) {
        case 1:
            tablaMultiplicacion()
            break;
        case 2:
            calculadora()
            break;
        case 3:
            seguir = 0
            break;
    }
}


let seguir = 1;

while (seguir == 1) {
    menu()
    do {
        seguir = parseInt(prompt('Escriba\n1 Para Escoger otra opcion\n0 Para Salir'))
    }
    while (isNaN(seguir) || seguir > 1 || seguir < 0)
}