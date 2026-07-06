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

import { obj } from "./00.js";

console.log("\n--- Estructuras de Datos ---");


let lenguages = ["JavaScript", "Python", "Java", "C++", "C#", "Ruby", "Go", "Rust"];

console.log(`\nLenguajes de programación iniciales:\n ${lenguages}`);

// Inserción

lenguages.push("TypeScript");

console.log(`\nLenguajes despues de una inserción: \n${lenguages}`);

//insercion al inicio del array

lenguages.unshift("PHP");

console.log(`\nLenguajes despues de una inserción al inicio: \n${lenguages}`);

// Borrado


let removedLanguage = lenguages.pop(); //remueve el ultimo elemento del array.

console.log(`\nLenguaje eliminado: \n${removedLanguage} \lenguages despues de la eliminacion: \n${lenguages}`);


lenguages.shift(); //remueve el primer elemento del array.

console.log(`\nLenguages despues de la eliminacion del primer elemento: \n${lenguages}`);

lenguages.slice(2, 4); //remueve elementos desde el indice 2 hasta el 4 (sin incluir el 4).
const slicedLanguages = lenguages.slice(2, 4);

console.log(`\nLenguages despues de la eliminacion de elementos desde el indice 2 hasta el 4: \n${slicedLanguages}`);

console.log(`\nLenguages restantes: \n${lenguages}`);


// Actualización

lenguages[1] = "Kotlin"; //actualiza el elemento en el indice 1.

// Ordenación

lenguages.sort(); //ordena el array en orden alfabético.

console.log(`\nLenguages despues de la ordenacion: \n${lenguages}`);

