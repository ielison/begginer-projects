let diaReferencia = document.getElementById("dia");
let DiasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
let dataHoje = new Date();
let diaHoje = dataHoje.getDay();
diaReferencia.innerHTML = `Hoje é <span>${DiasDaSemana[diaHoje]}</span>`;