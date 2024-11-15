"use strict";
console.log("\nCLASES POO");
// Definir la clase Pelicula
class Pelicula {
    // Constructor para inicializar los atributos
    constructor(titulo, director, año) {
        this.titulo = titulo;
        this.director = director;
        this.año = año;
    }
    // Método para obtener la información de la película
    obtenerInformacion() {
        return `${this.titulo} (dirigida por ${this.director}, ${this.año})`;
    }
}
// Crear una instancia de la clase Pelicula
let miPelicula = new Pelicula("Inception", "Christopher Nolan", 2010);
// Función para mostrar la información en el DOM y en la consola
function mostrarPelicula(pelicula) {
    // Mostrar en el DOM
    const peliculaElement = document.getElementById("classesOOP");
    if (peliculaElement) {
        peliculaElement.innerHTML = `
            <h2>Clases y POO: Película</h2>
            <p><strong>Información de la película:</strong> ${pelicula.obtenerInformacion()}</p>
        `;
    }
    // Mostrar en la consola
    console.log("Información de la película:", pelicula.obtenerInformacion());
    console.log("Contenido del objeto:", pelicula);
}
// Llamar a la función para mostrar la información
mostrarPelicula(miPelicula);
