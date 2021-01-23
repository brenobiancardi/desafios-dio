const colors = require("colors");

let testes = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
let resultados = [3775, 7325];

function gets() {
  return testes.shift();
}

function testar() {
  let i = 1;
  while (testes.length > 0) {
    console.warn("");
    let expect = resultados.shift();
    let resultado = desafio();
    if (resultado === expect) {
      console.warn(`TESTE ${i} passou`.black.bgGreen);
      console.warn(`Esperava = [${expect}] resultou = [${resultado}]`);
    } else {
      console.error(`TESTE ${i} não passou`.black.bgRed);
      console.error(`Esperava = [${expect}] resultou = [${resultado}]`);
    }
    i++;
  }
}

console.log = (entrada) => {
  return entrada; //para nao printar
};

testar();

function desafio(input) {
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
