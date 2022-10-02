// spread operator
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);
// [
//   'JAN', 'FEV', 'MAR',
//   'ABR', 'MAI', 'JUN',
//   'JUL', 'AGO', 'SET',
//   'OUT', 'NOV', 'DEZ'
// ]

// Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros.
// uma função que calcula o IMC, as informações vem em um array e são espalhados com spread operator nos parâmetros da função que calcula o IMC, MAS ATENTE-SE AO DETALHE QUE OS PARÂMETROS SÃO ESPALHADOS NA ORDEM. 
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


// E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5


// Usando objetos
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };

console.log(customer);
// {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer'
// }


// Pra Fixar
// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Laranja', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Caju', 'Melancia', 'Banana'];

const fruitSalad = (fruit, additional) => {
  return [
    ...fruit,
    ...additional
  ]
};

console.log(fruitSalad(specialFruit, additionalItens));
