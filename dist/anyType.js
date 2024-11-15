"use strict";
console.log("\nTIPOS ANY");
// Definición de variables con el tipo `any`
let variableAny = 42; // Número
console.log("Valor inicial (número):", variableAny);
const anyTypeElement = document.getElementById("anyType");
if (anyTypeElement) {
    anyTypeElement.innerHTML = `
        <h2>Tipo Any (Cualquier dato)</h2>
        <p>Inicialmente: ${variableAny}</p>
    `;
}
// Cambiar a otros tipos y mostrar en el DOM
variableAny = "Ahora soy una cadena"; // Cadena
console.log("Valor cambiado (cadena):", variableAny);
if (anyTypeElement) {
    anyTypeElement.innerHTML += `
        <p>Después de ser cambiado a cadena: ${variableAny}</p>
    `;
}
variableAny = true; // Booleano
console.log("Valor cambiado (booleano):", variableAny);
if (anyTypeElement) {
    anyTypeElement.innerHTML += `
        <p>Cambiado a un valor booleano: ${variableAny}</p>
    `;
}
variableAny = { nombre: "Juan", edad: 25 }; // Objeto
console.log("Valor cambiado (objeto):", variableAny);
if (anyTypeElement) {
    anyTypeElement.innerHTML += `
        <p>Cambiado a un objeto: ${JSON.stringify(variableAny)}</p>
    `;
}
variableAny = [1, 2, 3]; // Array
console.log("Valor cambiado (arreglo):", variableAny);
if (anyTypeElement) {
    anyTypeElement.innerHTML += `
        <p>Finalmente cambiado a un arreglo: ${variableAny}</p>
    `;
}
