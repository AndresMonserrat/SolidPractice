const readline = require("readline");

// Creamos la interfaz para leer la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const agenda = {};

function mostrarMenu() {
  console.log("\n--- AGENDA DE CONTACTOS ---");
  console.log("1. Buscar contacto");
  console.log("2. Insertar contacto");
  console.log("3. Actualizar contacto");
  console.log("4. Eliminar contacto");
  console.log("5. Mostrar todos los contactos");
  console.log("6. Salir");

  rl.question("\nSelecciona una opción (1-6): ", (opcion) => {
    switch (opcion.trim()) {
      case "1":
        console.log(agenda);
        Object.keys(agenda).length > 0
          ? buscarContacto()
          : console.log("La agenda está vacía. No hay contactos para buscar.");
        break;
      case "2":
        insertarContacto();
        break;
      case "3":
        actualizarContacto();
        break;
      case "4":
        eliminarContacto();
        break;
      case "5":
        mostrarTodos();
        break;
      case "6":
        console.log("\n¡Gracias por usar la agenda! Saliendo...");
        rl.close();
        break;
      default:
        console.log("Opción no válida. Intenta de nuevo.");
        mostrarMenu();
    }
  });

  // 1. BUSCAR
  function buscarContacto() {
    console.log("\n--- BUSCAR CONTACTO ---");
    rl.question("Introduce el nombre a buscar: ", (nombre) => {
      const nombreClave = nombre.trim();
      if (agenda[nombreClave]) {
        console.log(
          `🔍 Contacto encontrado: ${nombreClave} -> 📞 ${agenda[nombreClave]}`,
        );
        mostrarMenu();
      } else {
        console.log(`❌ El contacto '${nombreClave}' no existe.`);
        mostrarMenu();
      }
    });
  }

  // 2. INSERTAR
  function insertarContacto() {
    rl.question("Introduce el nombre del contacto: ", (nombre) => {
      const nombreClave = nombre.trim();

      rl.question("Introduce el número de teléfono: ", (telefono) => {
        const numeroClave = telefono.trim();

        if (isValidNameNumber(nombreClave, numeroClave)) {
          agenda[nombreClave] = numeroClave;
          console.log(
            `✅ Contacto agregado: ${nombreClave} -> 📞 ${numeroClave}`,
          );
          mostrarMenu();
        } else {
          console.log(`❌ Ya existe un contacto con ese nombre o número.`);
          mostrarMenu();
        }
      });
    });
  }

  function isValidNameNumber(name, PhoneNumber) {
    const nombreRepetido = Object.keys(agenda).includes(name);
    const numeroRepetido = Object.values(agenda).includes(PhoneNumber);
    return !nombreRepetido && !numeroRepetido;
  }

  // 3. ACTUALIZAR

  function actualizarContacto() {
    rl.question("Introduce el nombre del contacto a actualizar: ", (nombre) => {
      const nombreClave = nombre.trim();
      rl.question("Introduce el nuevo número de teléfono: ", (telefono) => {
        const numeroClave = telefono.trim();
        if (agenda[nombreClave]) {
          agenda[nombreClave] = numeroClave;
          console.log(
            `✅ Contacto actualizado: ${nombreClave} -> 📞 ${numeroClave}`,
          );
          mostrarMenu();
        } else {
          console.log(`❌ El contacto '${nombreClave}' no existe.`);
          mostrarMenu();
        }
      });
    });
  }
}
mostrarMenu();
