// pra fixar - forEAch
// Usar o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach((email) => {
  showEmailList(email);
});

// pra fixar - find
// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5());

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find((name) => name.length === 5);

console.log(findNameWithFiveLetters());

// Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
  // caso queira somente o nome da música;
  // const res = musicas.find((musica) => musica.id === id);
  // return res.title;
};

console.log(findMusic('31031685'));


// pra fixar - some e every
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((item) => item === name);

console.log(hasName(names2, 'Ana'));

// Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem 
// a idade maior ou igual à mínima e, caso contrário, false. Use every;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((item) => item.age >= minimumAge);

console.log(verifyAges(people, 18));

// pra fixar - sort
// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const crescente = people2.sort((a, b) => a.age - b.age);
console.log(crescente);

const descrescente = people2.sort((a, b) => b.age - a.age);
console.log(descrescente);