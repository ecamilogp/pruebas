// //ejercicio 1 convertir grados elcius a farenheit

// const { getActiveResourcesInfo } = require('node:process');

// const convertirCelsiusAFahrenheitt = (celsius) => (celsius * 9) / 5 + 32;

// document.write(`<p>0°C son ${convertirCelsiusAFahrenheitt(0)}°F</p>`);
// document.write(`<p>100°C son ${convertirCelsiusAFahrenheitt(100)}°F</p>`);

// // ejercicio 2

// // Función para convertir Celsius a Fahrenheit
// const convertirCelsiusAFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

// // Función para convertir Fahrenheit a Celsius
// const convertirFahrenheitACelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

// // Pedir al usuario que elija una opción
// const opcion = prompt(
//   '¿Qué conversión deseas realizar? Escribe:\n1: Celsius a Fahrenheit\n2: Fahrenheit a Celsius'
// );

// // Validar entrada del usuario
// if (opcion === '1' || opcion === '2') {
//   // Pedir la temperatura según la opción elegida
//   const valor = parseFloat(
//     prompt(
//       `Ingresa la temperatura en ${opcion === '1' ? 'Celsius' : 'Fahrenheit'}:`
//     )
//   );

//   if (!isNaN(valor)) {
//     // Realizar la conversión y mostrar el resultado
//     const resultado =
//       opcion === '1'
//         ? `${valor}°C son ${convertirCelsiusAFahrenheit(valor)}°F`
//         : `${valor}°F son ${convertirFahrenheitACelsius(valor)}°C`;

//     document.write(`<p>${resultado}</p>`);
//   } else {
//     document.write('<p>Por favor, ingresa un número válido.</p>');
//   }
// } else {
//   document.write('<p>Opción inválida. Por favor, selecciona 1 o 2.</p>');
// }

// ejercicio por mi cuenta
// const numero = prompt('Ingresa un número por favor').trim();

// if (numero === '') {
//   document.write(
//     'No has ingresado un número válido, el espacio no es un carácter válido.'
//   );
// } else if (isNaN(parseFloat(numero))) {
//   document.write(`"${numero}" no es un número válido.`);
// } else {
//   document.write(`${numero} es un número válido.`);
// }

// ejercicio 2

// const opciones = parseInt(
//   prompt(
//     '¿Elige una figura geométrica? Escribe:\n1: Círculo \n2: Cuadrado \n3: Triángulo'
//   )
// );

// const Circulo = (radio) => Math.PI * radio * radio;

// const cuadrado = (lado) => lado * lado;

// const triangulo = (base, altura) => (base * altura) / 2;

// if (opciones === 1) {
//   const valor = parseFloat(
//     prompt('Has seleccionado círculo. Ingresa el radio:')
//   );

//   if (!isNaN(valor)) {
//     const resultado = `${valor} el área del círculo es = ${Circulo(valor)}`;
//     document.write(resultado);
//   } else {
//     alert('Por favor ingresa un número válido para el radio');
//   }
// } else if (opciones === 2) {
//   const valor = parseFloat(
//     prompt('Has seleccionado cuadrado. Ingresa el lado para calcular el área:')
//   );

//   if (!isNaN(valor)) {
//     const resultado = `${valor} el área del cuadrado es = ${cuadrado(valor)}`;
//     document.write(resultado);
//   } else {
//     alert('Por favor ingresa un número válido para el lado');
//   }
// } else if (opciones === 3) {
//   const base = parseFloat(
//     prompt('Has seleccionado triángulo. Ingresa la base:')
//   );
//   const altura = parseFloat(prompt('Ingresa la altura:'));

//   if (isNaN(base) || isNaN(altura)) {
//     alert('Por favor ingresa números válidos para la base y la altura');
//   } else {
//     const resultado = `${base} de base y ${altura} de altura, el área del triángulo es = ${triangulo(
//       base,
//       altura
//     )}`;
//     document.write(resultado);
//   }
// } else {
//   alert('Opción no válida. Por favor, elige una opción válida.');
// }

// const num = parseInt(prompt('Ingresa un número y te diré si es primo:'), 10);

// function numeroPrimo(n) {
//   if (isNaN(n)) {
//     return document.write('❌ Por favor, ingresa un número válido.');
//   }

//   if (n < 2) {
//     return document.write(
//       `🔴 ${n} no es un número primo (debe ser mayor que 1).`
//     );
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return document.write(
//         `🔴 ${n} no es un número primo (es divisible por ${i}).`
//       );
//     }
//   }

//   document.write(`🟢 ${n} sí es un número primo.`);
// }

// ejercicio para encontrar numeros primos entre un limite inferior y uno superior

// alert(
//   'Te pediremos un número inferior y un límite superior y te daremos todos los números primos dentro de ese rango.'
// );

// const limiteInferior = parseInt(prompt('Ingresa el límite inferior:'));
// const limiteSuperior = parseInt(prompt('Ingresa el límite superior:'));

// if (isNaN(limiteInferior) || isNaN(limiteSuperior)) {
//   alert('Debes ingresar valores numéricos válidos.');
// } else if (limiteInferior >= limiteSuperior) {
//   alert(
//     'El límite inferior debe ser menor que el límite superior. Inténtalo nuevamente.'
//   );
// } else {
//   const esPrimo = (numero) => {
//     if (numero < 2) return false;
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//       if (numero % i === 0) return false;
//     }
//     return true;
//   };

//   document.write(
//     `Números primos entre ${limiteInferior} y ${limiteSuperior}:<br>`
//   );
//   for (let num = limiteInferior; num <= limiteSuperior; num++) {
//     if (esPrimo(num)) {
//       document.write(`🟢 ${num} es primo<br>`);
//     }
//   }
// }

// esPrimo(limiteInferior, limiteSuperior);

// primer ejercicio for sin ayuda 🙂🤟

// const inicio = parseInt(prompt('dame un numero de inicio'));

// const fin = parseInt(prompt('dame un numero para finalizar'));

// for (let i = inicio; i <= fin; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     document.write('FizzBuzz', '<br>');
//   } else if (i % 5 === 0) {
//     document.write('Buzz', '<br>');
//   } else if (i % 3 === 0) {
//     document.write('Fizz', '<br>');
//   } else {
//     document.write(i + '<br>');
//   }
// }

// ejercicio de ciclos anidados
// const numero = parseInt(prompt('por favor digita un numero'));

// for (let i = 0; i < numero; i++) {
//   for (let columna = 0; columna < numero; columna++) {
//     document.write('*');
//   }
//   document.write('<br>');
// }

// 2 ejercicio de bucle anidado

// const triangulo = parseInt(prompt('ingresa un numero '));

// for (let i = 0; i < triangulo; i++) {
//   for (let j = 0; j < i; j++) {
//     document.write('*');
//   }
//   document.write('<br>');
// }

// tercer ejercicio de bucles anidados
// const trianguloInvertido = parseInt(prompt('ingresa un numero '));

// for (let i = 0; i < trianguloInvertido; i++) {
//   for (let j = trianguloInvertido; j > i; j--) {
//     document.write('*');
//   }
//   document.write('<br>');
// }

// hacer una piramide

// const piramide = parseInt(
//   prompt('Ingresa un número para la altura de la pirámide: ')
// );

// for (let i = 1; i < piramide; i++) {
//   for (let j = 1; j < piramide - i; j++) {
//     document.write('&nbsp;');
//   }

//   for (let k = 1; k <= 2 * i; k++) {
//     document.write(*);
//   }

//   document.write('<br>');
// }

// ejercicio de piramides de numeros

// const piramide = parseInt(
//   prompt('Ingresa un número para la altura de la pirámide: ')
// );

// for (let i = 1; i <= piramide; i++) {
//   for (let j = 1; j <= piramide - i; j++) {
//     document.write('&nbsp;');
//   }

//   for (let k = 1; k <= i; k++) {
//     document.write(k + ' ');
//   }
//   document.write('<br>');
// }

//ejercicio de bucle para imprimir una tabla de multiplicar
// const num = parseInt(
//   prompt('ingresa un numero para imprimir la tabla del numero que escribiste')
// );

// for (let i = 1; i <= 12; i++) {
//   document.write(`${num} * ${i} = ${i * num}`, '<br>');
// }

//ejercicio de bucles anidados para  imprimir unas tablas de numero inicial hasta el final con validaciones
// alert(
//   'ingresa un numero inicial y un numero final para que pueda imprimir las tablas de el numero inicial hasta el numero final'
// );

// const num = parseInt(prompt('ingresa un numero inicial'));
// const num2 = parseInt(prompt('ingresa un numero final '));

// if (!isNaN(num) && !isNaN(num2)) {
//   for (let i = num; i <= num2; i++) {
//     for (let j = 1; j <= 12; j++) {
//       document.write(`${i} * ${j} = ${j * i}`, '<br>');
//     }
//     document.write('<br>');
//   }
// } else {
//   alert(
//     'en alguno de los campos no ingresaste un numero recuerda que solo se permiten usar numeros no letras ni caracteres especiales'
//   );
// }

// ejercicio de funcion para pedir numeros e ingresarlos a un array y mostrarlos ordenadamente

// const array = [];

// for (let i = 1; i <= 5; i++) {
//   const a = parseInt(prompt(`Ingresa el número ${i}:`));

//   if (!isNaN(a)) {
//     array.push(a);
//   } else {
//     alert('Por favor ingresa un número válido.');
//     i--;
//   }
// }

// array.sort((x, y) => x - y);

// document.write(`Números ingresados (ordenados): ${array.join(', ')}`);

// logica para encontar numero repetido ordenar el mayor y el menor ingresados en un array
// const arr = [];

// for (let i = 1; i <= 5; i++) {
//   const b = parseInt(prompt(`Ingresa el número ${i}`));

//   if (!isNaN(b)) {
//     arr.push(b);
//   } else {
//     alert('Por favor ingresa un número válido.');
//     i--;
//   }
// }

// arr.sort((x, y) => x - y);
// if (arr) {
//   document.write(`Números ingresados: ${arr.join(' , ')}`, '<br>');
//   document.write(`Número mayor: ${Math.max(...arr)}`, '<br>');
//   document.write(`Número menor: ${Math.min(...arr)}`, '<br>');
// }

// const count = {};
// arr.forEach((num) => {
//   count[num] = (count[num] || 0) + 1;
// });

// let repetidos = [];
// for (let num in count) {
//   if (count[num] > 1) {
//     repetidos.push(`${num} (se repite ${count[num]} veces)`);
//   }
// }

// if (repetidos.length > 0) {
//   document.write(`Números repetidos: ${repetidos.join(' , ')}`);
// } else {
//   document.write('No hay números repetidos.');
// }

// funcion para descubrir si el texto es palindromo
// const mensaje = prompt('Ingresa un texto y te diré si es un palíndromo');

// function palidromo(mensaje) {
//   if (!mensaje.trim()) {
//     return document.write('Por favor ingresa un texto válido.');
//   }

//   const limpio = mensaje.toLowerCase().replace(/[^a-z0-9]/g, '');

//   const invertido = limpio.split('').reverse().join('');

//   if (limpio === invertido) {
//     return document.write(`✅ "${mensaje.trim()}" es un palíndromo.`);
//   } else {
//     return document.write(`❌ "${mensaje.trim()}" no es un palíndromo.`);
//   }
// }

// palidromo(mensaje);

// juego de adivinanza de numeros
// alert(
//   'Juguemos a adivinar. Ingresa un número dependiendo del nivel de dificultad tendras que elegir entre 1 y 10 (facil) 1 y 50 (medio) 1 y 100 (dificil) para que adivines el número aleatorio: ¡elige una opcion entre facil (7 intentos), medio(5 intentos ) y dificil(3 intentos) !'
// );

// const dificultad = prompt(
//   '¿Elige una opcion de  dificultad? Escribe:\n1: Facil  \n2: medio \n3: dificil'
// );

// if (dificultad == 1 || dificultad == 'facil') {
//   alert(
//     ' has seleccionado el modo facil tienes 7 intentos para poder adivinar el numero entre 10 ¡¡continuemos!!'
//   );
//   const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

//   const array = [];

//   for (let i = 1; i <= 7; i++) {
//     const pregunta = parseInt(
//       prompt(`Intento #${i}. Ingresa un número para adivinar el aleatorio`)
//     );

//     array.push(pregunta);

//     if (pregunta === numeroAleatorio) {
//       document.write(
//         `🎉 ¡Felicidades! Adivinaste el número en tu intento #${i}. El número era ${numeroAleatorio}. 🥳<br>`
//       );
//       break;
//     } else {
//       if (i < 7) {
//         alert(
//           `Intento ${i}. No adivinaste. El número es ${
//             pregunta < numeroAleatorio ? 'mayor' : 'menor'
//           } que ${pregunta}.`
//         );
//       } else {
//         document.write(
//           `😢 Lo siento, has usado tus 7 intentos. El número era ${numeroAleatorio}.<br> tus numeros ingresados fueron : ${array.join(
//             ' ,'
//           )}`
//         );
//       }
//     }
//   }
// }

// if (dificultad == 2 || dificultad == 'medio') {
//   alert(
//     ' has seleccionado el modo medio tienes 5 intentos para poder adivinar el numero entre 50 ¡¡continuemos!!'
//   );
//   const numeroAleatorio = Math.floor(Math.random() * 50) + 1;

//   const array = [];

//   for (let i = 1; i <= 5; i++) {
//     const pregunta = parseInt(
//       prompt(`Intento #${i}. Ingresa un número para adivinar el aleatorio`)
//     );

//     array.push(pregunta);

//     if (pregunta === numeroAleatorio) {
//       document.write(
//         `🎉 ¡Felicidades! Adivinaste el número en tu intento #${i}. El número era ${numeroAleatorio}. 🥳<br>`
//       );
//       break;
//     } else {
//       if (i < 5) {
//         alert(
//           `Intento ${i}. No adivinaste. El número es ${
//             pregunta < numeroAleatorio ? 'mayor' : 'menor'
//           } que ${pregunta}.`
//         );
//       } else {
//         document.write(
//           `😢 Lo siento, has usado tus 5 intentos. El número era ${numeroAleatorio}.<br> tus numeros ingresados fueron : ${array.join(
//             ' ,'
//           )}`
//         );
//       }
//     }
//   }
// }

// if (dificultad == 3 || dificultad == 'dificil') {
//   alert(
//     ' has seleccionado el modo dificil tienes 3 intentos para poder adivinar el numero entre 100 ¡¡continuemos!!'
//   );
//   const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//   const array = [];

//   for (let i = 1; i <= 3; i++) {
//     const pregunta = parseInt(
//       prompt(`Intento #${i}. Ingresa un número para adivinar el aleatorio`)
//     );

//     array.push(pregunta);

//     if (pregunta === numeroAleatorio) {
//       document.write(
//         `🎉 ¡Felicidades! Adivinaste el número en tu intento #${i}. El número era ${numeroAleatorio}. 🥳<br>`
//       );
//       break;
//     } else {
//       if (i < 3) {
//         alert(
//           `Intento ${i}. No adivinaste. El número es ${
//             pregunta < numeroAleatorio ? 'mayor' : 'menor'
//           } que ${pregunta}.`
//         );
//       } else {
//         document.write(
//           `😢 Lo siento, has usado tus 3 intentos. El número era ${numeroAleatorio}.<br> tus numeros ingresados fueron : ${array.join(
//             ' ,'
//           )}`
//         );
//       }
//     }
//   }
// }

// JUEGO DE ADIVINANZAS OPTIMIZADO

// alert(
//   'Juguemos a adivinar. Ingresa un número dependiendo del nivel de dificultad:\n' +
//     '1. Fácil (1 a 10, 7 intentos)\n' +
//     '2. Medio (1 a 50, 5 intentos)\n' +
//     '3. Difícil (1 a 100, 3 intentos).'
// );

// function jugarAdivinar(dificultad, rangoMax, intentosMax) {
//   const numeroAleatorio = Math.floor(Math.random() * rangoMax) + 1;
//   const array = [];

//   for (let i = 1; i <= intentosMax; i++) {
//     const pregunta = prompt(
//       `Intento #${i}.\nIngresa un número entre 1 y ${rangoMax}:`
//     );

//     if (!pregunta || isNaN(pregunta) || pregunta < 1 || pregunta > rangoMax) {
//       alert(`Por favor, ingresa un número válido entre 1 y ${rangoMax}.`);
//       i--;
//       continue;
//     }

//     const numero = parseInt(pregunta);
//     array.push(numero);

//     if (numero === numeroAleatorio) {
//       document.write(
//         `🎉 ¡Felicidades! Adivinaste el número en tu intento #${i}. El número era ${numeroAleatorio}. 🥳<br>`
//       );
//       return;
//     } else {
//       alert(
//         `Intento ${i}. No adivinaste. El número es ${
//           numero < numeroAleatorio ? 'mayor' : 'menor'
//         } que ${numero}.`
//       );
//     }
//   }

//   document.write(
//     `😢 Lo siento, has usado todos tus intentos (${intentosMax}). El número era ${numeroAleatorio}.<br>` +
//       `Tus números ingresados fueron: ${array.join(', ')}.`
//   );
// }

// const dificultad = prompt(
//   '¿Elige una opción de dificultad? Escribe:\n1: Fácil\n2: Medio\n3: Difícil'
// ).toLowerCase();

// if (dificultad === '1' || dificultad === 'fácil' || dificultad === 'facil') {
//   jugarAdivinar('Fácil', 10, 7);
// } else if (dificultad === '2' || dificultad === 'medio') {
//   jugarAdivinar('Medio', 50, 5);
// } else if (
//   dificultad === '3' ||
//   dificultad === 'difícil' ||
//   dificultad === 'dificil'
// ) {
//   jugarAdivinar('Difícil', 100, 3);
// } else {
//   alert('Opción no válida. Por favor, recarga la página e intenta de nuevo.');
// }

// ejercicio de funcion 2
// Funciones para calcular áreas

// const calcularCirculo = (radio) => Math.PI * radio * radio;
// const calcularCuadrado = (lado) => lado * lado;
// const calcularTriangulo = (base, altura) => (base * altura) / 2;

// function geometria() {
//   const opciones = parseInt(
//     prompt(
//       '¿Elige una figura geométrica? Escribe:\n1: Círculo \n2: Cuadrado \n3: Triángulo'
//     )
//   );

//   if (opciones === 1) {
//     const radio = parseFloat(
//       prompt('Has seleccionado círculo. Ingresa el radio:')
//     );
//     if (!isNaN(radio) && radio > 0) {
//       alert(
//         `El área del círculo con radio ${radio} es: ${calcularCirculo(
//           radio
//         ).toFixed(2)}`
//       );
//     } else {
//       alert('Por favor ingresa un número válido y positivo para el radio.');
//     }
//   } else if (opciones === 2) {
//     const lado = parseFloat(
//       prompt('Has seleccionado cuadrado. Ingresa el lado:')
//     );
//     if (!isNaN(lado) && lado > 0) {
//       alert(
//         `El área del cuadrado con lado ${lado} es: ${calcularCuadrado(
//           lado
//         ).toFixed(2)}`
//       );
//     } else {
//       alert('Por favor ingresa un número válido y positivo para el lado.');
//     }
//   } else if (opciones === 3) {
//     const base = parseFloat(
//       prompt('Has seleccionado triángulo. Ingresa la base:')
//     );
//     const altura = parseFloat(prompt('Ingresa la altura:'));
//     if (!isNaN(base) && base > 0 && !isNaN(altura) && altura > 0) {
//       alert(
//         `El área del triángulo con base ${base} y altura ${altura} es: ${calcularTriangulo(
//           base,
//           altura
//         ).toFixed(2)}`
//       );
//     } else {
//       alert(
//         'Por favor ingresa números válidos y positivos para la base y la altura.'
//       );
//     }
//   } else {
//     alert('Opción no válida. Por favor, elige una opción válida.');
//   }
// }

// geometria();

// mini calculadora

// alert(
//   'Iniciaremos una mini calculadora para que puedas realizar las operaciones que desees. A continuación, vas a agregar un número, la operación a realizar y luego el siguiente número. Recuerda que:\n' +
//     'El signo  +  es igual a suma\n' +
//     'El signo  *  es igual a multiplicación\n' +
//     'El signo  -  es igual a resta\n' +
//     'El signo  /  es igual a división.'
// );

// const num1 = parseInt(prompt('Ingresa el primer número'));

// const opciones = parseInt(
//   prompt(
//     '¿Elige una opción? Escribe:\n1: + (suma) \n2: - (resta) \n3: * (multiplicación) \n4: / (división)'
//   )
// );

// function mensaje(opciones) {
//   if (opciones === 1) {
//     alert('Has seleccionado el #1 (SUMA)');
//   } else if (opciones === 2) {
//     alert('Has seleccionado el #2 (RESTA)');
//   } else if (opciones === 3) {
//     alert('Has seleccionado el #3 (MULTIPLICACIÓN)');
//   } else if (opciones === 4) {
//     alert('Has seleccionado el #4 (DIVISIÓN)');
//   } else {
//     alert(
//       'Has seleccionado una operación no válida. Las únicas disponibles son las que aparecen en el aviso. Por favor, selecciona correctamente.'
//     );
//     return false;
//   }
//   return true;
// }

// mensaje(opciones);

// const num2 = parseInt(
//   prompt(`ingresa el numero 2 con el que haras la operacion de ${opciones}`)
// );

// let resultado;
// switch (opciones) {
//   case 1:
//     resultado = num1 + num2;
//     break;
//   case 2:
//     resultado = num1 - num2;
//     break;
//   case 3:
//     resultado = num1 * num2;
//     break;
//   case 4:
//     if (num2 === 0) {
//       alert('No se puede dividir entre cero.');
//       throw new Error('División entre cero. Programa finalizado.');
//     }
//     resultado = num1 / num2;
//     break;
// }

// alert(`El resultado de la operación es: ${resultado}`);

// calculadora optimizada
// alert(
//   'Bienvenido a la calculadora. A continuación, ingresa dos números y selecciona una operación:\n' +
//     '+: Suma\n' +
//     '-: Resta\n' +
//     '*: Multiplicación\n' +
//     '/: División.'
// );

// const num1 = parseFloat(prompt('Ingresa el primer número:'));
// if (isNaN(num1)) {
//   alert('Por favor ingresa un número válido.');
//   throw new Error('Entrada inválida para el primer número.');
// }

// const operador = prompt('Ingresa el signo de la operación (+, -, *, /):');
// if (!['+', '-', '*', '/'].includes(operador)) {
//   alert('Operación no válida. Por favor selecciona entre +, -, *, /.');
//   throw new Error('Operador no válido.');
// }

// const num2 = parseFloat(prompt('Ingresa el segundo número:'));
// if (isNaN(num2)) {
//   alert('Por favor ingresa un número válido.');
//   throw new Error('Entrada inválida para el segundo número.');
// }

// // Funciones para las operaciones
// function suma(a, b) {
//   return a + b;
// }

// function resta(a, b) {
//   return a - b;
// }

// function multiplicacion(a, b) {
//   return a * b;
// }

// function division(a, b) {
//   if (b === 0) {
//     alert('No se puede dividir entre cero.');
//     throw new Error('División entre cero.');
//   }
//   return a / b;
// }

// let resultado;
// switch (operador) {
//   case '+':
//     resultado = suma(num1, num2);
//     break;
//   case '-':
//     resultado = resta(num1, num2);
//     break;
//   case '*':
//     resultado = multiplicacion(num1, num2);
//     break;
//   case '/':
//     resultado = division(num1, num2);
//     break;
// }

// alert(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
