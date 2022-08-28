//1.Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome,
// substituindo o xxxxx pelo nome em questão.
let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};
for (let index in names) {
  console.log("Olá " + names[index]);
}

//2.Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};
for (let index in car) {
  console.log(index, car[index]);
}

//funções

// Sem função
let nome = "João";

console.log("Bom dia, " + nome);

// Com função
function bomDiaTryber(nome) {
  console.log("Bom dia, " + nome);
}

bomDiaTryber("João"); // Bom dia, João
bomDiaTryber("Julia"); // Bom dia, Julia
bomDiaTryber("Marcelo"); // Bom dia, Marcelo

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + " é maior que " + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + " é maior que " + primeiroNum;
  } else {
    return "Os números são iguais";
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais
