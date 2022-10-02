// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };

// greeting(); // Welcome pessoa usuária!

// Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:
const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting(); // // Welcome pessoa usuária!

// Passar um parâmetro como default é um pequeno detalhe que torna o seu código muito mais semântico. Assim, o default será utilizado caso nenhum argumento seja fornecido à função. Você pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário.

// Pra Fixar
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));