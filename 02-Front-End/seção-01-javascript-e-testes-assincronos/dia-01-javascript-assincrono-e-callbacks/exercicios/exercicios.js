// 1.
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
// A ordem de finalização das linhas comentadas é: A, C e, por fim, B.

// 2.
const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  setTimeout(() => console.log('Planeta retornado: ', mars), 4000); // 1. Adiciona `setTimeout`
};

getPlanet(); // Imprime Marte depois de 4 segundos

// 3.
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const sendMarsTemperature = () => {
//   const currentTemperature = getMarsTemperature();
//   setTimeout(() => console.log(`A temperatura de Marte é: ${currentTemperature} graus celsius`), messageDelay());
// };

// sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// 4
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

// const greet = (temperature) =>
//   console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// // Definição da função sendMarsTemperature...
// const sendMarsTemperature = (onSuccess) => { // 1. Criamos a função `sendMarsTemperature`
//   const currentTemperature = getMarsTemperature(); // 2. Armazenamos a temperatura
//   setTimeout(() => onSuccess(currentTemperature), messageDelay()); // 3, 4, 5. Fazemos um `setTimout` utilizando a callback `onSuccess` e a variável `currentTemperature`
// };

// sendMarsTemperature(temperatureInFahrenheit);
// sendMarsTemperature(greet);

// 5 
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (onSuccess, onError) => {
  const currentTemperature = getMarsTemperature();
  const messageSuccessfullySent = Math.random() <= 0.6;
  setTimeout(() => {
      if(messageSuccessfullySent) onSuccess(currentTemperature)
      else onError('Robot is busy');
  }, messageDelay());
}

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);

// 6.
// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// it('uppercase "test" to equal "TEST"', (done) => { // 1. Criamos o it
//   uppercase('test', (strUpperCase) => { // 2. Chamamos a função `uppercase`
//     try { // 3. Adicionamos o `try/catch`
//       expect(strUpperCase).toBe('TEST'); // 4. Criamos o expect
//       done(); // 5. Chamamos a função `done`
//     } catch (error) {
//       done(error); // 6. Chamamos a função `done` com o parâmetro `error`
//     }
//   });
// });

// 7
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase "test" to equal "TEST"', (done) => { // 1. Criamos o it
  uppercase('test', (strUpperCase) => { // 2. Chamamos a função `uppercase`
    try { // 3. Adicionamos o `try/catch`
      expect(strUpperCase).toBe('TEST'); // 4. Criamos o expect
      done(); // 5. Chamamos a função `done`
    } catch (error) {
      done(error); // 6. Chamamos a função `done` com o parâmetro `error`
    }
  });
});

// 8
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) { // 1. Adicionamos o parâmetro `selectedPokemon`
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const handlePokemonSearch = (error, message) => {
  // Insira a callback de tratamento
  if (error) { // 2, 3. Criamos o `if/else` com o parâmetro `error`
    console.log(error); // 4. Colocamos o console.log() para imprimir o erro
  } else {
    console.log(message);// 5. Colocamos o console.log() para imprimir a mensagem
  }
};

getPokemonDetails('Bulbasaur', handlePokemonSearch);

// 9
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./get-pokemon-details');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :('); // 1. Criamos o erro esperado

    getPokemonDetails('Pikachu', (error, _message) => { // 2, 3. Chamamos a função passando os parâmetros
      try { // 4. Adiciona um `try/catch`
        expect(error).toEqual(expectedError); // 5. Criamos o expect
        done(); // 6. Chamamos a função `done()`
      } catch (error) {
        done(error); // 7. Chamamos a função `done()` com o parâmetro `error`
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => { // 8. Os mesmos processos do primeira `it` com seus ajustes
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});


// 10
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
1 - beforeEach // antes de cada teste
1 - test // o teste
1 - afterEach // depois de cada teste
1 - beforeEach // antes de cada teste
2 - beforeEach // antes de cada teste dentro do describe
2 - test // o teste dentro do describe
2 - afterEach // depois de cada teste dentro do describe
1 - afterEach // depois de cada teste