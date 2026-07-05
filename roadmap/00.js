/* Operators */

const obj = {
    name: "Andres",
    "last name": "Monserrat",
    age: 22,
    gende: "male",
    gusto: ["blue", "red", "black"]
}


/* Assignment */

console.log(`Here we have the Assignment operator with the current age ${obj.age}`)

console.log(`Here we have the Assignment operator with the new age ${obj.age = 12}`)


/* Increment */
console.log(`${obj.age}`)

console.log(`${obj.age += 1}`)


/* Destructuration */

const [first, second, third] = obj.gusto

console.log("Destructuracion", first, second, third)

const numbers = [10, 20, 30, 40];


const [firstNum, ...rest] = numbers

console.log("Destructuracion", firstNum, rest[rest.length - 1])


/* an example to get a promise.all, it means we can wait for multiple promises to resolve */

const [pokemons, items] = await Promise.all([
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json()),
    fetch("https://pokeapi.co/api/v2/item").then((res) => res.json())
])

console.log("Pokemons", pokemons)
console.log("-*-*-**-*-*-*-*")
console.log("Items", items)