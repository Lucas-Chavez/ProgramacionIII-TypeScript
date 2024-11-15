console.log("\nOBJETOS LITERALES")

// Crear un objeto literal sin tipar los atributos
let persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
};

// Función para mostrar el objeto en el DOM y en la consola
function mostrarObjeto(objeto: object, mensaje: string) {
    // Mostrar el mensaje en el h2 del DOM
    const objectElement = document.getElementById("literalObjects");
    if (objectElement) {
        objectElement.innerHTML += `
            <p><strong>${mensaje}</strong> ${JSON.stringify(objeto)}</p>
        `;
    }
    
    // Mostrar en la consola
    console.log(mensaje, JSON.stringify(objeto));
    console.log("Contenido del objeto:", persona);
}

// Mostrar el título h2 en el DOM
const titleElement = document.getElementById("literalObjects");
if (titleElement) {
    titleElement.innerHTML = `
        <h2>Objetos literales (introducción)</h2>
    `;
}

// Mostrar el objeto inicial
mostrarObjeto(persona, "Objeto inicial:");

// Modificar los atributos del objeto
persona.nombre = "Carlos";
persona.edad = 30;
persona.ciudad = "Barcelona";

// Mostrar el objeto modificado
mostrarObjeto(persona, "Objeto después de modificar atributos:");
