// Array Destructuring

// SEM DESTRUCTURING
// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada


// COM DESTRUCTURING
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada


// Pra Fixar
// Exercício 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [string, func] = saudacoes;
func(string); // Olá


// Ecercício 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // gato água arroz

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água


// Exercício 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [1, 3, 5, 6, 8, 10, 12]

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
// [6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares; // a vírgula pula um elemento do array 
console.log(numerosPares); // [6, 8, 10, 12];