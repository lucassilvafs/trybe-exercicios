// exercicio 1 - fatorial
const factorial = (number) => {
  let result = 1;
  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }
  return result;
};
const print = factorial(number); //Lembre-se de alterar o valor de number!
console.log(`Esse é o fatorial ${print}`);

// recursiva
// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));


// exercício 2 - Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
// Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of
const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// Longestword com sort em uma linha
// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));


// Exercício 3 - Crie uma página HTML que possua um contador de cliques.


// Crie duas funções JavaScript com as seguintes especificações:
// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

console.log(substituaX('Bebeto'));

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;

  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    resultado = `${resultado}
    - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};

console.log(minhasSkills(substituaX('Bebeto')));
