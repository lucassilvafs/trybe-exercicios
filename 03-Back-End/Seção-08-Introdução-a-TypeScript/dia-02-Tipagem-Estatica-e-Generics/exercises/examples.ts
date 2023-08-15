// Array
let names: string[] = ["Mary Joe", "Alan Joe"];

// Tupla
let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];

// Type Aliases
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("O valor da coordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da coordenada x é: 100
//O valor da coordenada y é: 100

// Type Unions
// A função abaixo pode receber tanto um número
// quanto uma string.
function imprimirCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

imprimirCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111
imprimirCPF('111.111.111-11');
// Saída:
// Seu CPF é: 111.111.111-11