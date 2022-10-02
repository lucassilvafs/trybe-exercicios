// const newUser = (id, name, email) => {
//   return {
//     id: id,
//     name: name,
//     email: email,
//   };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// É exatamente essa repetição que a feature property shorthand elimina: podemos simplesmente substituir id: id por id que o Javascript entende que você quer atribuir o valor de id a uma propriedade com o mesmo nome que o parâmetro passado:
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }


// Pra Fixar

// const getPosition = (latitude, longitude) => ({
//   latitude: latitude,
//   longitude: longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));

// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));
