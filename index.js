const btnBorrar = document.getElementById("limpiarFormulario");
const btnResumen = document.getElementById("verPrecio");
const btnEstudiante = document.getElementById("estudiante");
const btnTrainee = document.getElementById("trainee");
const btnJunior = document.getElementById("junior");
const btnVisitante = document.getElementById("normal");
let cantidadTickets = document.getElementById("cantidadTickets");
const precioTicket = 200;
let precioTotal;
const participanteTipo = ["Estudiante", "Trainee", "Junior", "Visitante"];
let participanteElegido = participanteTipo[3];
let descuentoAAplicar;

cantidadTickets.value = 1;
getDiscount(participanteElegido);

function getDiscount (x) {
  if (x == participanteTipo[0]) {
      descuentoAAplicar = 0.20;
      btnEstudiante.style.backgroundColor = "lightgray";
      btnTrainee.style.removeProperty("background-color");
      btnJunior.style.removeProperty("background-color");
      btnVisitante.style.removeProperty("background-color");
  } else if (x == participanteTipo[1]) {
      descuentoAAplicar = 0.50;
      btnTrainee.style.backgroundColor = "lightgray";
      btnEstudiante.style.removeProperty("background-color");
      btnJunior.style.removeProperty("background-color");
      btnVisitante.style.removeProperty("background-color");
  } else if (x == participanteTipo[2]) {
      descuentoAAplicar = 0.85;
      btnJunior.style.backgroundColor = "lightgray";
      btnTrainee.style.removeProperty("background-color");
      btnEstudiante.style.removeProperty("background-color");
      btnVisitante.style.removeProperty("background-color");
  }
    else if (x == participanteTipo[3]) {
      descuentoAAplicar = 1;
      btnVisitante.style.backgroundColor = "lightgray";
      btnJunior.style.removeProperty("background-color");
      btnTrainee.style.removeProperty("background-color");
      btnEstudiante.style.removeProperty("background-color");
  }
}

function chooseDiscount0(event) {
    participanteElegido = participanteTipo[0];
    getDiscount(participanteElegido)
}

function chooseDiscount1(event) {
    participanteElegido = participanteTipo[1];
    getDiscount(participanteElegido)
}


function chooseDiscount2(event) {
    participanteElegido = participanteTipo[2];
    getDiscount(participanteElegido)
}

function chooseDiscount3(event) {
  participanteElegido = participanteTipo[3];
  getDiscount(participanteElegido)
}


btnEstudiante.addEventListener('click', chooseDiscount0);
btnTrainee.addEventListener('click', chooseDiscount1);
btnJunior.addEventListener('click', chooseDiscount2);
btnVisitante.addEventListener('click', chooseDiscount3);


function clearForm(event) {
  document.getElementById("comprarTickets").reset();
}

btnBorrar.addEventListener('click', clearForm);

function getPrice(event) { 
  document.getElementById("precioArs").textContent = ((precioTicket * descuentoAAplicar) * parseInt(cantidadTickets.value));
}

btnResumen.addEventListener('click', getPrice);