// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;
// Quando tentamos acessar uma propriedade que não existe, o valor retornado é undefined
// Você consegue atribuir um valor padrão utilizando default destructuring a uma propriedade que não existe, mais um recurso do ES6

// Objetos
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

// Ou seja, você consegue atribuir um valor a uma propriedade que não existe e assim ele passa a existir com o valor passado como padrão, mas apenas se ele não tiver nenhum valor, caso ele exista e possua valor, o valor será o passado pra ele, não o valor padrão. O valor padrão é somente caso ele não exista ou não tenha um valor informado.

// Arrays
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0


// Pra Fixar
// Do jeito que está, quando person é passado para a função getNationality o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;
// ou seja, caso nationality seja undefined, o valor padrão será 'brazilian'
const newPerson = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(newPerson)); // João is Brazilian