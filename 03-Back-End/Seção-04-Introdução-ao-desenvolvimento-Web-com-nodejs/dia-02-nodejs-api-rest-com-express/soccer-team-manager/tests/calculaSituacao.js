const { expect } = require('chai');

const calculaSituacao = require('../src/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovação"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovação');
  });
});

// ------------------------------------------------------------
// original

// const { expect } = require('chai');

// const calculaSituacao = require('../examples/calculaSituacao');

// describe('Quando a média for menor que 7', function () {
//   it('retorna "reprovação"', function () {
//     const resposta = calculaSituacao(4);

//     expect(resposta).to.be.equals('reprovação');
//   });
// });