function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  const daysList = document.querySelector('#days');
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };

// 1.crie um calendario dinamicamente 
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const numberDays = decemberDaysList[index];
    const numberDayListItem = document.createElement('li');
    numberDayListItem.className = 'day';
    if (numberDays === 24 || numberDays === 25 || numberDays === 31) {
      numberDayListItem.classList.add('holiday');
    }
    if (numberDays === 4 || numberDays === 11 || numberDays === 18 || numberDays === 25) {
      numberDayListItem.classList.add('friday');
    }
    numberDayListItem.innerHTML = numberDays;

    daysList.appendChild(numberDayListItem);
  };
};

createDaysOfTheWeek();
holiday('Feriados');
friday('Sexta-feira');
changeColorHoliday();
let fridaysList = [4, 11, 18, 25];
changeTextFriday(fridaysList);
dayMouseOver();
dayMouseOut();
newTaskSpan('projeto');
newTaskDiv('green');
setTaskClass();
setDayColor();
addNewTask();

// Escreva seu código abaixo.
// 2.criei uma função que cria dinamicamente um botão com nome "Feriados"
function holiday(btnName) {
  const btnHoliday = document.createElement("button");
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerHTML = btnName;
  const divButtonHoliday = document.querySelector(".buttons-container");
  divButtonHoliday.appendChild(btnHoliday);
}
// 3.criei uma função que cria dinamicamente um botão com nome "Sexta-feira"
function friday(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
}
// 4.Uma função que cria dinamicamente um botão com o nome "Sexta-feira". A função deve receber como parâmetro a string "Sexta-feira".
function changeColorHoliday() {
  let holidayButton = document.querySelector('#btn-holiday'); // selecione o botão "Feriados";
  let holidays = document.querySelectorAll('.holiday')// Seleciona todos os feriados como um array de elementos;
  let backgroundColor = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
  let newColor = 'white'; // armazena a nova cor que será utilizada ao pressionar o botão.

  holidayButton.addEventListener('click', function() {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === newColor) {
        holidays[index].style.backgroundColor = backgroundColor;
      } else {
        holidays[index].style.backgroundColor = newColor;
      }
    }
  })
}
// 5.Uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicionei ao botão "Sexta-feira" um evento de "click" e modifiquei
// o texto a ser exibido nos dias que são sextas-feiras.
function changeTextFriday(array) {
  let fridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newName = 'SEXTOU!';


  fridayButton.addEventListener('click', function() {
    for(let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newName) {
        fridays[index].innerHTML = newName;
      } else {
        fridays[index].innerHTML = array[index];
      }
    }
  })
}
// 6.Aqui são duas funções que cria um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia
// aumenta e, quando o ponteiro do mouse sair do dia, o texto retorna ao tamanho original.
function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
}
// 7.Implementei uma função que adiciona uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName); // Anexando a task como filha de taskContainer
}
// 8.Implementei uma função que adiciona uma legenda com cor para a tarefa.
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
}
// 9.Implementei uma função que seleciona uma tarefa.
// Adicionei um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, 
// ou seja, quando a tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
// 10.Implementei uma função que atribui a cor da tarefa ao dia do calendário
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}



