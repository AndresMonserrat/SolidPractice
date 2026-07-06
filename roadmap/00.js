/* Operators */

export const obj = {
  name: "Andres",
  "last name": "Monserrat",
  age: 22,
  gende: "male",
  gusto: ["blue", "red", "black"],
};

/* Assignment */

console.log(
  `Here we have the Assignment operator with the current age ${obj.age}`,
);

console.log(
  `Here we have the Assignment operator with the new age ${(obj.age = 12)}`,
);

/* Increment */
console.log(`${obj.age}`);

console.log(`${(obj.age += 1)}`);

/* Destructuration */

const [first, second, third] = obj.gusto;

console.log("Destructuracion", first, second, third);

const numbers = [10, 20, 30, 40];

const [firstNum, ...rest] = numbers;

console.log("Destructuracion", firstNum, rest[rest.length - 1]);

/* an example to get a promise.all, it means we can wait for multiple promises to resolve */

/* const [pokemons, items] = await Promise.all([
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json()),
    fetch("https://pokeapi.co/api/v2/item").then((res) => res.json())
])

console.log("Pokemons", pokemons)
console.log("-*-*-**-*-*-*-*")
console.log("Items", items) */

/* Aritmeticos */

let suma = obj.age + 2;

let restValue = suma - obj.age;

let div = obj.age / 2;

let mul = obj.age * obj.age;

console.log(Math.abs(-2.5));
console.log(Math.round(4.2)); /* Redondea hacia el entero mas cercano */

console.log(Math.ceil(4.5)); /* redondea hacia arriba */

console.log(Math.floor(4.5)); /* redondea hacia abajo */

console.log(Math.sqrt(4)); /* raices cuadradas */

console.log(
  Math.round(Math.random() * 100) + 1,
); /* numeros aleatorios entre 1 y 100 acercandose al numero entero mas cercano.*/

console.log("\n--- Operadores de Comparación e Identidad ---");
console.log("Igualdad débil (5 == '5'):", 5 == "5"); // true (convierte el tipo)
console.log("Identidad/Estricto (5 === '5'):", 5 === "5"); // false (diferente tipo)
console.log("Desigualdad débil (5 != '5'):", 5 != "5"); // false
console.log("Desigualdad estricta (5 !== '5'):", 5 !== "5"); // true
console.log("Mayor que (10 > 5):", 10 > 5);
console.log("Menor o igual que (5 <= 5):", 5 <= 5);

console.log("\n--- Estructuras Condicionales ---");

let edad = 17;

if (edad >= 18) {
  console.log("Papi, eres un craki, vete de rumba.");
} else {
  console.error("Papi, pailas , vete a dormir.");
}

/* let frutas = ["Manzana", "Banana", "Uva"];
for (let fruta of frutas) {
    console.log(`  Fruta: ${fruta}`);
} */

/* 
for (let i = 10; i <= 55; i += 1) {
    
}
 */
console.log("\n--- Operadores Lógicos ---");

for (let i = 10; i <= 55; i += 1) {
  if (i % 2 === 0 && i % 3 !== 0 && i != 16) {
    console.log(`  ${i} es par`);
  }  
}
