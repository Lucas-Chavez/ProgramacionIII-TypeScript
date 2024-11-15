console.log("\nTYPE PERSONALIZADO")

// Definir un tipo para el objeto Vehículo
type Vehiculo = {
    marca: string;
    modelo: string;
    año: number;
};

// Crear un objeto literal con el tipo Vehículo
let vehiculo: Vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

// Función para mostrar el objeto en el DOM y en la consola
function mostrarVehiculo(objeto: Vehiculo, mensaje: string) {
    // Mostrar el mensaje en el h2 del DOM
    const vehiculoElement = document.getElementById("custonType");
    if (vehiculoElement) {
        vehiculoElement.innerHTML += `
            <p><strong>${mensaje}</strong> ${JSON.stringify(objeto)}</p>
        `;
    }

    // Mostrar en la consola
    console.log(mensaje, JSON.stringify(objeto));
    console.log("Contenido del objeto:", vehiculo);
}

// Mostrar el título h2 en el DOM
const custonElement = document.getElementById("custonType");
if (custonElement) {
    custonElement.innerHTML = `
        <h2>Tipo Personalizado: Vehículo</h2>
    `;
}

// Mostrar el objeto inicial
mostrarVehiculo(vehiculo, "Vehículo inicial:");

// Modificar los atributos del objeto
vehiculo.marca = "Honda";
vehiculo.modelo = "Civic";
vehiculo.año = 2022;

// Mostrar el objeto modificado
mostrarVehiculo(vehiculo, "Vehículo después de modificar atributos:");
