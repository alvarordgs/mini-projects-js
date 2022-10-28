import Countdown from "./contador.js";

console.log(new Date());

const tempoParaCopa = new Countdown("24 November 2022 20:00:00 GMT+0200");
const tempos = document.querySelectorAll("[data-time]");

function showDate() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaCopa.total[index];
  });
}

//Ativar a funcao para ficar automatico ao comecar
showDate();

//Atualiza o tempo de um em um segundo
setInterval(showDate, 1000);
