//1. fatorial
const fatorial = 5;
let resultado = 1;
for (let index = 1; index <= fatorial; index += 1) {
  resultado = resultado * index;
}
console.log(resultado);

//2.Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para
//"ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = "tryber";
invertedWord = word.split("").reverse().join("");
console.log(invertedWord);

//3.Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
// Considere o número de caracteres de cada palavra.
let array = ["java", "javascript", "python", "html", "css"];
let maiorPalavra = array[0];
let menorPalavra = array[0];
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  } else if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}
console.log("A maior palavra é:", maiorPalavra);
console.log("A menor palavra é:", menorPalavra);

//4.Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e
// por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
let maior = 0;
for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  isPrimo = true;
  for (let divisor = 2; divisor < numeroAtual; divisor += 1) {
    if (numeroAtual % divisor === 0) {
      isPrimo = false;
    }
  }
  if (isPrimo) {
    maior = numeroAtual;
    console.log("é primo:", numeroAtual);
  }
}
console.log("O maior número primo é:", maior);

//Bônus
//1. Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1,
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// let n = 5;
// let symbol = "*";
// let inputLine = "";

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   inputLine = inputLine + symbol;
// }
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   console.log(inputLine);
// }

//2.Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
// let size = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//   console.log(inputLine);
//   inputLine = inputLine + symbol;
// };

//3.Agora inverta o lado do triângulo
// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n - 1;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// };

//4.Por fim, faça uma pirâmide com n asteriscos de base
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };

//5.Faça uma pirâmide com n asteriscos de base, que seja vazia no meio
// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }

//6.Faça um programa que diz se um número definido numa variável é primo ou não.
// let divisors = 1;
// let numberToCheck = 31;

// for (let number = 2; number <= numberToCheck; number += 1) {
//   if (numberToCheck % number === 0) divisors += 1;
// }

// if (divisors === 2) console.log(numberToCheck + ' é primo');
// else console.log(numberToCheck + ' não é primo');
