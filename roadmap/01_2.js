/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

let contacts = [];

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  rl.question(
    "\n\nSelecciona una opción:\n1. Añadir contacto\n2. Buscar contacto\n3. Actualizar contacto\n4. Eliminar contacto\n5. Mostrar contactos\n6. Salir\n",
    (option) => {
      switch (option) {
        case "1":
          addContact();
          break;
        case "2":
          searchContact();
          break;
        case "3":
          updateContact();
          break;
        case "4":
          /* deleteContact(); */
          break;
        case "5":
          showContacts();
          break;
        case "6":
          rl.close();
          break;
        default:
          console.log("Opción no válida");
          showMenu();
      }
    },
  );
}

function addContact() {
  try {
    rl.question("Introduce el nombre del contacto: ", (name) => {
      if (!name) {
        console.log("El nombre no puede estar vacío.");
        showMenu();
        return;
      } else if (contacts.some((contact) => contact.name === name)) {
        console.log("Ya existe un contacto con ese nombre.");
        showMenu();
        return;
      } else if (typeof name !== "string") {
        console.log("El nombre debe ser una cadena de texto.");
        showMenu();
        return;
      } else {
        console.log("Tipo de dato", typeof name);
        rl.question(
          "Introduce el número de teléfono del contacto: ",
          (phone) => {
            if (!/^\d{1,11}$/.test(phone) || phone.length < 7) {
              console.log(
                "Número de teléfono no válido. Debe ser numérico y tener hasta 11 dígitos.",
              );
              showMenu();
              return;
            }

            contacts.push({ name, phone });
            console.log(`Contacto ${name} añadido correctamente.`);
            showMenu();
          },
        );
      }
    });
  } catch (error) {
    console.error("Error al añadir contacto:", error);
  } finally {
    showMenu();
  }
}

function searchContact() {
  rl.question("Introduce el nombre del contacto a buscar: ", (name) => {
    const contact = contacts.find((contact) => contact.name === name);
    if (contact) {
      console.log(`Contacto encontrado: ${contact.name} - ${contact.phone}`);
    } else {
      console.log("Contacto no encontrado.");
    }
    showMenu();
  });
}

function updateContact() {
  if (contacts.length === 0) {
    console.log("No hay contactos en la agenda.");
    showMenu();
    return;
  } else {
    rl.question("Introduce el nombre del contacto a actualizar: ", (name) => {
      contacts.forEach((contact) => {
        if (contact.name === name) {
          rl.question("Introduce el nuevo nombre del contacto: ", (newName) => {
            rl.question(
              "Introduce el nuevo número de teléfono del contacto: ",
              (newPhone) => {
                contact.name = newName;
                contact.phone = newPhone;
                console.log(`Contacto ${name} actualizado correctamente.`);
                showMenu();
              },
            );
          });
        } else {
          console.log("Contacto no encontrado.");
          showMenu();
        }
      });
    });
  }
}

function showContacts() {
  if (contacts.length === 0) {
    console.log("No hay contactos en la agenda.");
  } else {
    console.log("Contactos en la agenda:");
    console.log(contacts);
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.name} - ${contact.phone}`);
    });
  }
  showMenu();
}
console.log(contacts);
showMenu();
