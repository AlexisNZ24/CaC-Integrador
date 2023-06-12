const btnBorrar = document.getElementById("limpiarFormulario");
const btnResumen = document.getElementById("verPrecio");
const btnEstudiante = document.getElementById("estudiante");
const btnTrainee = document.getElementById("trainee");
const btnJunior = document.getElementById("junior");
const btnVisitante = document.getElementById("normal");
let ticketAmount = document.getElementById("cantidadTickets");
const ticketPrice = 200;
const visitantType = ["Estudiante", "Trainee", "Junior", "Visitante"];
let visitantSelect = visitantType[3];
let discountToApply;

.value = 1;
getDiscount(visitantSelect);

function getDiscount (x) {
  if (x == visitantType[0]) {
      discountToApply = 0.20;
      btnEstudiante.style.backgroundColor = "lightgray";
      btnTrainee.style.removeProperty("background-color");
      btnJunior.style.removeProperty("background-color");
      btnVisitante.style.removeProperty("background-color");
  } else if (x == visitantType[1]) {
      discountToApply = 0.50;
      btnTrainee.style.backgroundColor = "lightgray";
      btnEstudiante.style.removeProperty("background-color");
      btnJunior.style.removeProperty("background-color");
      btnVisitante.style.removeProperty("background-color");
  } else if (x == visitantType[2]) {
      discountToApply = 0.85;
      btnJunior.style.backgroundColor = "lightgray";
      btnTrainee.style.removeProperty("background-color");
      btnEstudiante.style.removeProperty("background-color");
      btnVisitante.style.removeProperty("background-color");
  }
    else if (x == visitantType[3]) {
      discountToApply = 1;
      btnVisitante.style.backgroundColor = "lightgray";
      btnJunior.style.removeProperty("background-color");
      btnTrainee.style.removeProperty("background-color");
      btnEstudiante.style.removeProperty("background-color");
  }
}

function chooseDiscount0(event) {
    visitantSelect = visitantType[0];
    getDiscount(visitantSelect)
}

function chooseDiscount1(event) {
    visitantSelect = visitantType[1];
    getDiscount(visitantSelect)
}


function chooseDiscount2(event) {
    visitantSelect = visitantType[2];
    getDiscount(visitantSelect)
}

function chooseDiscount3(event) {
  visitantSelect = visitantType[3];
  getDiscount(visitantSelect)
}


btnEstudiante.addEventListener('click', chooseDiscount0);
btnTrainee.addEventListener('click', chooseDiscount1);
btnJunior.addEventListener('click', chooseDiscount2);
btnVisitante.addEventListener('click', chooseDiscount3);


function clearForm(event) {
  document.getElementById("comprarTickets").reset();
  ticketAmount.value = 1;
}

btnBorrar.addEventListener('click', clearForm);

function getPrice(event) { 
  document.getElementById("precioArs").textContent = ((ticketPrice * discountToApply) * parseInt(cantidadTickets.value));
}

btnResumen.addEventListener('click', getPrice);
