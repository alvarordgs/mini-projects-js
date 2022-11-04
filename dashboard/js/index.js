const personagensContador = document.querySelector("#personagens");
const luasContador = document.querySelector("#luas");
const planetasContador = document.querySelector("#planetas");
const navesContador = document.querySelector("#naves");

preencherContadores();
preencherTabela();

function preencherContadores() {
  Promise.all([
    swapiGet("people/"),
    swapiGet("vehicles/"),
    swapiGet("planets/"),
    swapiGet("starships/"),
  ]).then(function (results) {
    personagensContador.innerHTML = results[0].data.count;
    luasContador.innerHTML = results[1].data.count;
    planetasContador.innerHTML = results[2].data.count;
    navesContador.innerHTML = results[3].data.count;
  });
}

async function preencherTabela() {
  const response = await swapiGet("films/");
  console.log(response);
}

function swapiGet(param) {
  return axios.get(`https://swapi.dev/api/${param}`);
}