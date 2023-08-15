// snipet pra verificar maioridade com números aleatórios
const checkTernary = (age) => age >= 18 ? `Você tem ${age} anos, você tem idade para dirigir!` : `Você tem ${age} anos, você ainda não tem idade para dirigir...`;

console.log(checkTernary(Math.floor(Math.random() * 69) + 2));

