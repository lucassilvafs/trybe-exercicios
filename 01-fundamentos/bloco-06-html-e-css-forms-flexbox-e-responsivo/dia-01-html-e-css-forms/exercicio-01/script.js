// as constantes minusculas são do Bonus que eu peguei no gabarito
const INPUTS = document.getElementsByClassName('inputs');

function enableSubmit() {
  const submitBtn = document.querySelector('#btn-submit');
  const agreement = document.querySelector('#checkbox-2');
  submitBtn.disabled = !agreement.checked;
}

function textInputValidation() {
  const email = document.querySelector('#input-email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#input-name').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#resposta').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

function clear() {
  for (let index = 0; index < INPUTS.length; index += 1) {
    INPUTS[index].value = '';
    INPUTS[index].checked = false;
  }
}

window.onload = function() {
  const BTN_SUBMIT = document.querySelector('#btn-submit');
  BTN_SUBMIT.addEventListener('click', handleSubmit);
  const BTN_CLEAR = document.querySelector('#btn-clear');
  BTN_CLEAR.addEventListener('click', clear);
  const agreement = document.querySelector('#checkbox-2');
  agreement.addEventListener('change', enableSubmit);
};