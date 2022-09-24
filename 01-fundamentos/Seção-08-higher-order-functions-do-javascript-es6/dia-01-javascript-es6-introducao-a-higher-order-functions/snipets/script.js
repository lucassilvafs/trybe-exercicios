// First Class Functions
// Dizemos que uma linguagem de programação tem First-Class Functions quando ela trata suas funções como first class citizens 
// (isto é, cidadãos de primeira classe), ou seja, elas suportam as mesmas operações que estão disponíveis para os outros tipos. 
// Isso significa que nossas funções podem ser atribuídas a variáveis, passadas como argumento e/ou retornadas por outras funções. 
// JavaScript é uma linguagem que utiliza esse conceito, portanto podemos:

// Atribuir funções a variáveis:
function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);
//  [Function: sum]


// Atribuindo uma arrow function
const sum = (number1, number2) => {
  return number1 + number2;
};


// Passar funções como argumento para outras funções:
const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
  console.log(callback());
}

printGreeting(sayHello);


// Retornar uma função de outra função:
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));


// As Higher Order Functions ou HOFs são funções que usam outras funções em suas operações, 
// devendo aceitá-las como parâmetro e/ou retorná-las. Exemplo:
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

//Estruturando uma HOF
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// Pegamos a nossa implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função repeat
// 1-Um número até que ponto gostaríamos de testar, neste caso 3;
// 2-Nossa ação que será executada quando chamada action(count) na nossa função repeat, neste caso uma função para testar nossos números.
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// Pense agora que gostaríamos de testar quais números são ímpares. Veja como fica fácil ajustar a implementação:
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

//
const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator);