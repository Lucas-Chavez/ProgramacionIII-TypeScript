"use strict";
console.log("\nARRAYS");
// Declarar un arreglo simple con números
let numeros = [1, 2, 3, 4, 5];
// Mostrar el arreglo inicial
console.log("Arreglo inicial:", numeros);
// Agregar elementos al arreglo
numeros.push(6); // Agrega al final
numeros.unshift(0); // Agrega al principio
console.log("Arreglo después de agregar elementos:", numeros);
// Eliminar el primer y último elemento
numeros.shift(); // Elimina el primer elemento
numeros.pop(); // Elimina el último elemento
console.log("Arreglo después de eliminar el primer y último elemento:", numeros);
// Acceder a un elemento específico
let primerElemento = numeros[0];
console.log("Primer elemento del arreglo:", primerElemento);
// Declarar un arreglo de cadenas
let frutas = ["Manzana", "Banana", "Cereza"];
console.log("Arreglo de frutas:", frutas);
// Actualizar un valor en el arreglo
frutas[1] = "Pera";
console.log("Arreglo de frutas después de actualización:", frutas);
// Crear un arreglo con valores mixtos usando `any`
let mezcla = [1, "texto", true, { nombre: "Juan" }, [1, 2, 3]];
console.log("Arreglo con mezcla de tipos:", mezcla);
// Mostrar el contenido en el DOM
const arrayElement = document.getElementById("array");
if (arrayElement) {
    arrayElement.innerHTML = `
        <h2>Arreglos en TypeScript</h2>
        <p>Arreglo inicial de números: ${numeros}</p>
        <p>Arreglo de frutas después de actualización: ${frutas}</p>
        <p>Arreglo con mezcla de tipos: ${JSON.stringify(mezcla)}</p>
    `;
}
