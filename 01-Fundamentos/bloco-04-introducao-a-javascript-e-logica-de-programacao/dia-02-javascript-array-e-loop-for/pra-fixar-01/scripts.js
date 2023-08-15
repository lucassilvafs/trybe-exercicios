// array
// Obtenha o valor "Serviços" do array menu:
let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];
console.log(menuServices);
// Procure o índice do valor "Portfólio" do array menu:
let indexOfPortfolio = menu[2];
console.log(indexOfPortfolio);
// Adicione o valor "Contato" no final do array menu:
menu.push("Contato");
console.log(menu);

// for
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}

// for/of
// Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ["João", "Maria", "Antônio", "Margarida"];
for (let name of names) {
  console.log(name);
}

// While/Do

let counter = 0;

while (counter !== 5) {
  counter += 1;
}

function dice() {
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
  d2 = dice();
}
