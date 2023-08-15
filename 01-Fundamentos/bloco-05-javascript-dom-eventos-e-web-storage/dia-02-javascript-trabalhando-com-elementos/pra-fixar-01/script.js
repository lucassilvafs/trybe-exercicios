// criando elementos
document.getElementById("elementoOndeVoceEsta");
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red";
document.getElementById("elementoOndeVoceEsta").firstElementChild.innerHTML =
  "vermelho";
document.getElementById("pai").firstElementChild.innerHTML = "filho";
document.getElementById("elementoOndeVoceEsta").previousElementSibling;
document.getElementById("elementoOndeVoceEsta").nextElementSibling;

let container = document.getElementById("elementoOndeVoceEsta").parentNode;
let elemento = document.createElement("section");
container.appendChild(elemento);

// removendo elementos
let pai = document.getElementById("pai");
let filho = document.getElementById("primeiroFilho");
pai.removeChild(filho);
pai.removeChild(document.getElementById("terceiroFilho"));
