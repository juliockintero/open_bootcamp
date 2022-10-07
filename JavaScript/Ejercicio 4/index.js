
// Ejercicio 4 cadenas y metodos de las cadenas.

let nombre = "Julio Cesar";

let apellido = "Quintero Leal";

let estudiante = nombre +" "+ apellido;
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase();

console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase();

console.log(estudianteMinus)

let numeroLetras = estudiante.length;

console.log(numeroLetras);

let primeraLetraNombre = estudiante[0]

console.log(primeraLetraNombre);

let ultimaLetraApellido = estudiante[estudiante.length - 1];

console.log(ultimaLetraApellido);

let estudianteNoEspacios = estudiante.split(" ").join("");

console.log(estudianteNoEspacios);

let isNombre = estudiante.includes("Julio");

console.log(isNombre)