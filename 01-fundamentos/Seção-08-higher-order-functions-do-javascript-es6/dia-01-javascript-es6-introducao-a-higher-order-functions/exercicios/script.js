// // Exercício 1 - Nova pessoa contratada
// // const nameList = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'];

// const getEmail = (name) => ({nome: name, email: `${name.replace(' ', '_').toLowerCase()}@trybe.com`})

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(getEmail));


// // Exercício 2 - Sorteador de loteria
// const checkNumber = (numberWinner, number) => {
//   if (numberWinner === number) {
//     return 'Parabéns você ganhou';
//   }
//   return 'Tente novamente';
// }

// const resultRafle = (number, callback) => {
//   const numberWinner = Math.ceil(Math.random() * 5);
//   return callback(numberWinner, number);
// }

// console.log(resultRafle(5, checkNumber));


// // Exercício 3 - Corretor automático de exame
// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const grade = (rightAnswers, studentAnswers) => {
//   let finalGrade = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     if (rightAnswers[index] === studentAnswers[index]) {
//       finalGrade += 1;
//     } else if (studentAnswers[index] !== rightAnswers[index] && studentAnswers[index] !== 'N.A') {
//       finalGrade -= 0.5;
//     }
//   }
//   return finalGrade;
// }

// const corrector = (rightAnswers, studentAnswers, callback) => callback(rightAnswers, studentAnswers);

// console.log(corrector(RIGHT_ANSWERS, STUDENT_ANSWERS, grade));


// Exercício Bônus - Game Actions Simulator
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 700,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => Math.ceil(Math.random() * (dragon.strength - 15 + 1)) + 15;

const warriorDamage = (warrior) => Math.ceil(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength;

const mageDamage = (mage) => {
  if (mage.mana < 15) {
    return { attack: 'Não possui mana suficiente', mana: 0 };
  }
  return { attack: Math.ceil(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence, mana: mage.mana - 15 };
};

// console.log(dragonDamage(dragon));
// console.log(warriorDamage(warrior));
// console.log(mageDamage(mage));

const gameActions = {
  warriorTurn: (warriorDamage) => {
    dragon.healthPoints -= warriorDamage(warrior);
    warrior.damage = warriorDamage(warrior);
  },
  mageTurn: (mageDamage) => {
    dragon.healthPoints -= mageDamage(mage).attack;
    mage.damage = mageDamage(mage).attack;
    mage.mana = mageDamage(mage).mana;
  },
  dragonTurn: (dragonDamage) => {
    warrior.healthPoints -= dragonDamage(dragon);
    mage.healthPoints -= dragonDamage(dragon);
    dragon.damage = dragonDamage(dragon);
  },
  turnResults: () => battleMembers,
};

const game = () => {
  let turn = 1;
  for (let index = 0; index < turn; index += 1) {
    console.log(`turno: ${turn}`);
    
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamage);
    gameActions.dragonTurn(dragonDamage);
    console.log(gameActions.turnResults());
    if (dragon.healthPoints <= 0) {
      return 'o Dragão foi derrotado!';
    }
    if (warrior.healthPoints <= 0 && mage.healthPoints <= 0) {
      return 'Game Over';
    }
    turn += 1;
  }
}
console.log(game());



// Código que gera um número aleatório entre dois números

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// A função getRandomInt() acima tem intervalo com o valor mínimo incluído e o máximo excluído. Mas se você precisar que 
// a função inclua, tanto o mínimo quanto o máximo, em seus resultados? A função getRandomIntInclusive() abaixo faz isso.

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const dragonDamage = (min, max) => Math.ceil(Math.random() * (max - min + 1)) + min;
// const warriorDamage = (min, max) => Math.ceil(Math.random() * (max - min + 1)) + min;
// const mageDamage = (min, max, mana) => {
//   if (mana < 15) {
//     return { damage: 'Não possui mana suficiente', mana: 0 };
//   }
//   return { damage: Math.ceil(Math.random() * (max - min + 1)) + min, mana: mana - 15 };
// };
