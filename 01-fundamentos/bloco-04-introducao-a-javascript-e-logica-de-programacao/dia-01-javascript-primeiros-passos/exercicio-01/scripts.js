const a = 30;
const b = 15;
const c = 20;
let maior = 0;

//1
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2
if (a > b) {
  maior = a;
} else {
  maior = b;
}
console.log("o maior é o", maior);

//3
if (a > b && a > c) {
  maior = a;
} else if (b > a && b > c) {
  maior = b;
} else {
  maior = c;
}
console.log("o maior é ", maior);

//4
const d = 2;
(d) => {
  if (d > 0) {
    console.log("positive");
  } else if (d < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
};

//5
// gerador de números aleatórios de 180 a -180 => Math.floor(Math.random() * 360 + 1) - 180
let ladoA = 60;
let ladoB = 60;
let ladoC = 60;
//console.log("lado A: " + ladoA, "lado B: " + ladoB, "lado C: " + ladoC);
if (ladoA >= 0 && ladoB >= 0 && ladoC >= 0) {
  if (ladoA + ladoB + ladoC === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro: Defina um valor maior do que 0");
}

//6
const pecaDeXadrez = "torre";
function movimentos(pecaDeXadrez) {
  let peca = pecaDeXadrez.toLowerCase();
  switch (peca) {
    case "bispo":
      console.log("diagonal");
      break;
    case "cavalo":
      console.log("Em L");
      break;
    case "Rei":
      console.log("Em qualquer direção, porém uma casa por vez");
      break;
    case "Rainha":
      console.log(
        "Assim como o Rei, pode mover-se em qualquer direção, porém quantas casas quiser, desde que estejam livres."
      );
      break;
    case "Peão":
      console.log(
        "Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas"
      );
      break;
    case "Torre":
      console.log("Vertical e horinzotal");
      break;
    default:
      console.log("Erro: Defina uma peça válida");
  }
}

//7
const porcentagem = 75;
if (porcentagem >= 90) {
  console.log("A");
} else if (porcentagem >= 80) {
  console.log("B");
} else if (porcentagem >= 70) {
  console.log("C");
} else if (porcentagem >= 60) {
  console.log("D");
} else if (porcentagem >= 50) {
  console.log("E");
} else if (porcentagem < 50) {
  console.log("F");
}

//8
const num1 = 10;
const num2 = 25;
const num3 = 35;
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

//9
if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1) {
  console.log(true);
} else {
  console.log(false);
}

//10
const valorCusto = 20;
const valorVenda = 100;
let valorCustoTotal, impostoSobreOCusto, lucro, faturamento;
if (valorCusto >= 0 && valorVenda >= 0) {
  impostoSobreOCusto = (valorCusto / 100) * 20;
  valorCustoTotal = valorCusto + impostoSobreOCusto;
  lucro = valorVenda - valorCustoTotal;
  faturamento = lucro * 1000;
  console.log("O faturamento total é de " + faturamento);
} else {
  console.log("Erro: Os valores devem ser maiores que 0");
}

//11
const salario = 2800;
let salarioBase, valorINSS, valorIR, salarioLiquido, parcelaIR, aliquota;

function INSS(salario) {
  if (salario >= 0) {
    if (salario <= 1556.94) {
      valorINSS = (salario / 100) * 8;
      //console.log(valorINSS);
    } else if (salario <= 2594.92) {
      valorINSS = (salario / 100) * 9;
      //console.log(valorINSS);
    } else if (salario <= 5189.82) {
      valorINSS = (salario / 100) * 11;
      //console.log(valorINSS);
    } else {
      valorINSS = 570.88;
    }
  } else {
    console.log("Erro: Insira um valor maior do que 0");
  }
}

function IR(salario, valorINSS) {
  salarioBase = salario - valorINSS;
  if (salarioBase <= 1903.98) {
    aliquota = 0;
    //console.log("Isento de imposto de renda");
  } else if (salarioBase <= 2826.65) {
    aliquota = (salarioBase / 100) * 7.5;
    parcelaIR = 142.8;
    valorIR = aliquota - parcelaIR;
    //console.log(valorIR, parcelaIR, aliquota);
  } else if (salarioBase <= 3751.05) {
    aliquota = (salarioBase / 100) * 15;
    parcelaIR = 354.8;
    valorIR = aliquota - parcelaIR;
    //console.log(valorIR, parcelaIR, aliquota);
  } else if (salarioBase <= 4664.68) {
    aliquota = (salarioBase / 100) * 22.5;
    parcelaIR = 636.13;
    valorIR = aliquota - parcelaIR;
    //console.log(valorIR, parcelaIR, aliquota);
  } else {
    aliquota = (salarioBase / 100) * 27.5;
    parcelaIR = 869.36;
    valorIR = aliquota - parcelaIR;
    //console.log(valorIR, parcelaIR, aliquota);
  }
}

INSS(salario);
IR(salario, valorINSS);
salarioLiquido = salarioBase - valorIR;
console.log("O valor do salário líquido é de: " + salarioLiquido);
