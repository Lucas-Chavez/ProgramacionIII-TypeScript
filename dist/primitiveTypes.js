"use strict";
console.log("\nTIPOS PRIMITIVOS");
// Ejemplo de null y undefined
let valorNull = null;
let valorUndefined = undefined;
// Ejemplo de booleanos con operadores AND, OR, NOT
let bool1 = true;
let bool2 = false;
// Operadores booleanos
let andResult = bool1 && bool2;
let orResult = bool1 || bool2;
let notResult = !bool1;
// Ejemplo de tipos numéricos
let entero = 10; // Entero
let decimal = 10.5; // Decimal
let exponencial = 1e3; // Exponencial
let exponencialNegativo = 1e-3; // Exponencial Negativo
let hexadecimal = 0xF; // Hexadecimal
let octal = 0o10; // Octal
let binario = 0b1010; // Binario
// Variables para concatenar
let nombre = "Lucas";
let edad = 20;
let esEstudiante = true;
// Ejemplo de string
let comillasDobles = "Hola Mundo";
let comillasSimples = 'Hola Mundo';
let templateLiteral = `Hola, mi nombre es ${nombre}, tengo ${edad} años y ${esEstudiante ? "soy estudiante" : "no soy estudiante"}.`;
// Mostrar resultados en consola
console.log("Valor null:", valorNull);
console.log("Valor undefined:", valorUndefined);
console.log("AND:", andResult);
console.log("OR:", orResult);
console.log("NOT:", notResult);
console.log("Entero:", entero);
console.log("Decimal:", decimal);
console.log("Exponencial:", exponencial);
console.log("Exponencial Negativo:", exponencialNegativo);
console.log("Hexadecimal:", hexadecimal);
console.log("Octal:", octal);
console.log("Binario:", binario);
console.log("Comillas Dobles:", comillasDobles);
console.log("Comillas Simples:", comillasSimples);
console.log("Template Literal:", templateLiteral);
// Mostrar resultados en el DOM
const dataTypeElement = document.getElementById("PrimitiveType");
if (dataTypeElement) {
    dataTypeElement.innerHTML = `
        <h2>Tipos de Datos Primitivos</h2>
        
        <h3>Booleanos con operadores:</h3>
        <ul>
            <li>AND (true && false): ${andResult}</li>
            <li>OR (true || false): ${orResult}</li>
            <li>NOT (!true): ${notResult}</li>
        </ul>

        <h3>Números:</h3>
        <ul>
            <li>Entero: ${entero}</li>
            <li>Decimal: ${decimal}</li>
            <li>Exponencial: ${exponencial}</li>
            <li>Exponencial Negativo: ${exponencialNegativo}</li>
            <li>Hexadecimal: ${hexadecimal}</li>
            <li>Octal: ${octal}</li>
            <li>Binario: ${binario}</li>
        </ul>

        <h3>Cadenas (Strings):</h3>
        <ul>
            <li>Comillas dobles: ${comillasDobles}</li>
            <li>Comillas simples: ${comillasSimples}</li>
            <li>Template literal: ${templateLiteral}</li>
        </ul>
    `;
}
