let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
//1.Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log("Bem-vinda, " + info.personagem);

//2.Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida,
// imprima o objeto no console. Valor esperado no console:
info.recorrente = "Sim";
//info["recorrente"] = "Sim";
console.log(info);

//3.Faça um for/in que mostre todas as chaves do objeto.
for (let key in info) {
  console.log(key);
}

//4.Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
for (let key in info) {
  console.log(info[key]);
}

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
//'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'.
//Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log(`${info.personagem} e ${info2.personagem}
${info.origem} e ${info2.origem}
${info.nota} e ${info2.nota}`);
if (info.recorrente === info2.recorrente) {
  console.log("Ambos recorrentes");
}
// ------------------------------------------------------------------------------------------------------------------
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

//6.Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log
//no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
console.log(
  "O livro favorito de " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    " se chama " +
    leitor.livrosFavoritos[0].titulo
);

//7.Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto
//contendo as seguintes informações:
leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});
console.log(leitor.livrosFavoritos);

//8.Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(
  leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos"
);

//Funções
// 1. Função que retorna true se a string é palíndromo e false se não for
function verificaPalindrome(string) {
  let novaString = string.split("").reverse().join("");
  if (novaString === string) {
    return true;
  }
  return false;
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));

// 2. função que retorna o índice do maior valor
function maiorIndice(array) {
  let maior = 0;
  for (let key in array) {
    if (array[key] > maior) {
      maior = key;
    }
  }
  return maior;
}
array = [2, 3, 6, 7, 10, 1];
console.log(maiorIndice(array));

// 3. função que retorna o índice do menor valor
function menorIndice(array) {
  let menor = array[0];
  for (let key in array) {
    if (array[key] < menor) {
      menor = key;
    }
  }
  return menor;
}
array2 = [2, 3, 2, 5, 8, 2, 3];
console.log(menorIndice(array2));

// 4. função que retorna o maior nome do array
const nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
function maiorNome(nomes) {
  let maiorNome = "";
  for (let nome in nomes) {
    if (nomes[nome].length > maiorNome.length) {
      maiorNome = nomes[nome];
    }
  }
  return maiorNome;
}
console.log(maiorNome(nomes));

//5.tenho que criar uma função que receba um array de inteiros e retorne o inteiro que mais se repete
array = [2, 3, 2, 5, 8, 2, 3];
let hits = 0;
let maxHits = 0;
function inteiroRepetido(array) {
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        hits += 1;
      }
    }
    if (hits > maxHits) {
      maxHits = array[index];
    }
  }
  console.log(maxHits);
}

inteiroRepetido(array);

// 6. função que recebe um número natural
// (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N
function somatorio(numero) {
  let soma = 0;
  for (let index = 1; index <= numero; index += 1) {
    soma += index; // soma = soma + index;
  }
  return soma;
}
console.log(somatorio(5));

// 7. Uma função que recebe uma string word e outra chamada de string ending. Verifique se
// a string ending é o final da string word. Considere que a string ending sempre será menor
// que a string word.
function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split("").reverse().join("");
  let inversoFimPalavra = fimPalavra.split("").reverse().join("");
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break; // O "break" serve para encerrar o loop.
    } else {
      result = true;
    }
  }

  return result;
}

console.log(verificaFimPalavra("trybe", "be")); //true
console.log(verificaFimPalavra("joaofernando", "fernan")); //false
