// função pura é a função que o resultado depende apenas dos parâmetros passados a elas, 
// o retorno é sempre previsível.
// Dessa forma se a função acessa ou modifica qualquer coisa que não tenha sido passada como 
// parâmetro a ela, é então uma função impura.

// assert é uma ferramenta de teste simples
const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70

// Mas usaremos o Jest que é um framework Javascript de teste


// criar o package.json
// npm init -y

// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1"
// },
// "scripts": {
//   "test": "jest"
// },

// instalação do Jest
// npm install --save-dev jest