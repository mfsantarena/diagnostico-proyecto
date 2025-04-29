const lista = [3, 7, 12, 5, 2];
// Usar map para generar un nuevo array con los números al cuadrado.
const num_nuevo = lista.map(num => num * num);
console.log(num_nuevo);
// Usar filter para obtener los números mayores a 5.
const mayor5 = lista.filter(num => num > 5);
console.log(mayor5);
//  Escribir una función flecha que reciba un número y devuelva si es par o impar.
const nros = [3, 7, 12, 5, 2];

// Función flecha que recibe un número y devuelve si es par o impar
const pareimpar = num => num % 2 === 0 ? "par" : "impar";

const resultado = nros.map(num => `${num} es ${pareimpar(num)}`);

console.log(resultado);