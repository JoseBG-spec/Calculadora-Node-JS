let calc = require('./Calculadora')
const prompt = require('prompt-sync')();
let menu = true;
let number1;
let number2;
console.log(`Bienvenido`)
while (menu) {
    console.log(`Que operacion quieres realizar? (Escribe el numero)
                    1)Añadir números
                    2)Restar números
                    3)Multiplicar números
                    4)Dividir números
                    5)Elevar al cuadrado un número
                    6)Sacar raiz de un número
                    7)Salir`)
    let answer = prompt(`Tu eleccion: `)
    answer = Number(answer)
    switch (answer) {
        case 1:
            number1 = prompt('Dame el primer numero : ')
            number2 = prompt('Dame el segundo numero : ')
            console.log(`La respuesta es : ${calc.add(number1, number2)}`)
            break;
        case 2:
            number1 = prompt('Dame el primer numero : ')
            number2 = prompt('Dame el segundo numero : ')
            console.log(`La respuesta es : ${calc.substract(number1, number2)}`)
            break;
        case 3:
            number1 = prompt('Dame el primer numero : ')
            number2 = prompt('Dame el segundo numero : ')
            console.log(`La respuesta es : ${calc.multiply(number1, number2)}`)
            break;
        case 4:
            number1 = prompt('Dame el primer numero : ')
            number2 = prompt('Dame el segundo numero : ')
            console.log(`La respuesta es : ${calc.divide(number1, number2)}`)
            break;
        case 5:
            number1 = prompt('Dame el numero : ')
            console.log(`La respuesta es : ${calc.square(number1)}`)
            break;
        case 6:
            number1 = prompt('Dame el numero : ')
            console.log(`La respuesta es : ${calc.squareRoot(number1)}`)
            break;
        case 7:
            menu = false;
            break;
    }

}