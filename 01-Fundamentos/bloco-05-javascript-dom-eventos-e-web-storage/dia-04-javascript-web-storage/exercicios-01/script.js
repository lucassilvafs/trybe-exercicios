// site que troca as cores :)

const text = document.getElementById("text");
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const cores = document.querySelectorAll('.divColor');
const paleta = document.getElementById('cores');
const fonts = ['Arial', 'Helvetica', 'sans-serif'];

function inicial(fonts) {
  for(let index = 0; index < cores.length; index +=1) {
    cores[index].style.width = '50px';
    cores[index].style.height = '50px';
    cores[index].style.borderRadius = '100%';
    cores[index].style.marginRight = '20px';
  }
  paleta.style.display = 'flex';
  green.style.backgroundColor = 'green';
  red.style.backgroundColor = 'red';
  blue.style.backgroundColor = 'blue';
  let fontContainer = document.createElement('div');
  let listFont = document.createElement('ul');
  for(let index = 0; index < fonts.length; index +=1) {
    let font = document.createElement('li');
    font.style.fontFamily = fonts[index];
  }
  fontContainer.innerText = 'Tamanho da fonte';
}

function changeTextColor() {
  green.addEventListener('click', function() {
    text.style.color = 'green';
  })
  red.addEventListener('click', function() {
    text.style.color = 'red';
  })
  blue.addEventListener('click', function() {
    text.style.color = 'blue';
  })
}

changeTextColor();

window.onload = function() {
  inicial();
}