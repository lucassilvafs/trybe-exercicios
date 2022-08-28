const header = document.getElementById("header-container");
header.style.backgroundColor = "rgba(22, 165, 77, 0.712)";

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0, 56, 52)";

const emergency = document.querySelector(".emergency-tasks");
emergency.style.backgroundColor = "rgb(255, 153, 124)";

const noEmergency = document.querySelector(".no-emergency-tasks");
noEmergency.style.backgroundColor = "rgb(246, 235, 83)";

const textEmergency = document.getElementsByClassName("emergency");
for (let index in textEmergency) {
  textEmergency[index].style.backgroundColor = "rgb(194, 0, 244)";
}

const textNoEmergency = document.getElementsByClassName("no-emergency");
for (let i in textNoEmergency) {
  textNoEmergency[i].style.backgroundColor = "rgb(000, 000, 000)";
}
// não consegui esse de cima, o DOM desistiu de mim :/ fiz com CSS
