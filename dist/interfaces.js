"use strict";
console.log("\nINTERFACES");
// Crear un objeto usando la interfaz
let programador = {
    nombre: "Laura",
    lenguaje: "TypeScript",
    experiencia: 5
};
// Función para mostrar el objeto en el DOM y en la consola
function mostrarProgramador(objeto, mensaje) {
    // Mostrar el mensaje en el elemento h2 del DOM
    const programadorElement = document.getElementById("interfaces");
    if (programadorElement) {
        programadorElement.innerHTML += `
            <p><strong>${mensaje}</strong> ${JSON.stringify(objeto)}</p>
        `;
    }
    // Mostrar en la consola
    console.log(mensaje, JSON.stringify(objeto));
    console.log("Contenido del objeto:", programador);
}
// Mostrar el título h2 en el DOM
const ElementTitlte = document.getElementById("interfaces");
if (ElementTitlte) {
    ElementTitlte.innerHTML = `
        <h2>Uso de Interfaces: Programador</h2>
    `;
}
// Mostrar el objeto inicial
mostrarProgramador(programador, "Programador inicial:");
// Modificar los atributos del objeto
programador.nombre = "Carlos";
programador.lenguaje = "JavaScript";
programador.experiencia = 8;
// Mostrar el objeto modificado
mostrarProgramador(programador, "Programador después de modificar atributos:");
