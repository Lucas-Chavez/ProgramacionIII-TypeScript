console.log("\nENCAPSULAMIENTO Y GENERICOS")

// Definir una clase genérica con encapsulamiento
class Caja<T> {
    // Atributos privados
    private contenido: T;
    private propietario: string;

    // Constructor para inicializar los atributos
    constructor(contenido: T, propietario: string) {
        this.contenido = contenido;
        this.propietario = propietario;
    }

    // Método para obtener el contenido (con encapsulamiento)
    public getContenido(): T {
        return this.contenido;
    }

    // Método para cambiar el contenido
    public setContenido(nuevoContenido: T): void {
        this.contenido = nuevoContenido;
    }

    // Método para obtener el propietario
    public getPropietario(): string {
        return this.propietario;
    }
}

// Crear una instancia de la clase genérica con un número
let cajaNumerica = new Caja<number>(42, "Carlos");

// Crear una instancia de la clase genérica con una cadena
let cajaTexto = new Caja<string>("Hola Mundo", "María");

// Función para mostrar la información en el DOM y en la consola
function mostrarCaja<T>(caja: Caja<T>, mensaje: string) {
    // Mostrar en el DOM
    const cajaElement = document.getElementById("encapsulationGenerics");
    if (cajaElement) {
        cajaElement.innerHTML += `
            <p><strong>${mensaje}</strong> Contenido: ${caja.getContenido()}, Propietario: ${caja.getPropietario()}</p>
        `;
    }

    // Mostrar en la consola
    console.log(`${mensaje} Contenido:`, caja.getContenido());
    console.log(`${mensaje} Propietario:`, caja.getPropietario());
    console.log("Contenido del objeto:", caja);
}

// Mostrar el título h2 en el DOM
const titleContent = document.getElementById("encapsulationGenerics");
if (titleContent) {
    titleContent.innerHTML = `
        <h2>Encapsulamiento y Genéricos</h2>
    `;
}

// Mostrar las cajas en el DOM y en la consola
mostrarCaja(cajaNumerica, "Caja numérica:");
mostrarCaja(cajaTexto, "Caja de texto:");
