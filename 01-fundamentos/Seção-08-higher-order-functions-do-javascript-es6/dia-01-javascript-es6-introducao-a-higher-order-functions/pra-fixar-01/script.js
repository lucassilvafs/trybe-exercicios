const wakeUp = () => 'Acordando!!';
const cofee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  return callback();
};

console.log(doingThings(sleep));