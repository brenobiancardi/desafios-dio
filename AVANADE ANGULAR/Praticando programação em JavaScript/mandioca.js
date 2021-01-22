const colors = require("colors");

function testar() {
  let testes = [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
  ];
  let resultados = [3775, 7325];

  let i = 1;
  while (testes.length > 0) {
    let expect = resultados.shift();
    let resultado = desafio(testes.shift());
    if (resultado === expect) {
      console.error("");
      console.warn(`TESTE ${i} passou`.black.bgGreen);
      console.warn(`Esperava = [${expect}] resultou = [${resultado}]]`);
    } else {
      console.error("");
      console.error(`TESTE ${i} não passou`.black.bgRed);
      console.error(`Esperava = [${expect}] resultou = [${resultado}]]`);
    }
  }
}

console.log = (entrada) => {
  return entrada;
};

testar();

function desafio(input) {
  function gets() {
    return input.shift();
  }

  let total = 0;
  let chico = 300 * parseInt(gets());
  let bento = 1500 * parseInt(gets());
  let bernardo = 600 * parseInt(gets());
  let marina = 1000 * parseInt(gets());
  let iara = 150 * parseInt(gets());
  let marlene = 225;

  total = chico + bento + bernardo + marina + iara + marlene;

  console.log(total);

  return total;
}
