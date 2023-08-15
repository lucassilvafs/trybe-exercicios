let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

//2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let total = 0;
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log("2. ", total);
//console.log("teste", parseInt(total));
//console.log("2. ", numbers.length);

//3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let total2 = 0;
for (let i = 0; i < numbers.length; i += 1) {
  total2 = total2 + numbers[i];
}
console.log("3. ", total2 / numbers.length);

//4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20".
//Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let total3 = 0;
for (let i = 0; i < numbers.length; i += 1) {
  total3 = total3 + numbers[i];
}
if (total3 > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//5.Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log("o maior numero do array é", maior);

//6.Descubra quantos valores ímpares existem no array e imprima o resultado.
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impares = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) {
    impares += 1;
  }
}
console.log("no array temos", impares, "números ímpares");

//7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = 0;
menor = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}
console.log("o menor numero do array é", menor);

//8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
const array = [];
for (let i = 0; i <= 24; i += 1) {
  array[i] = i + 1;
}
console.log("valores do array", array);

//9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let i = 0; i <= 24; i += 1) {
  console.log(array[i] / 2);
}
