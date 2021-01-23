const colors = require("colors");

let testes = [
  [3, 1000, 1000, 1000],
  [5, 1, 2, 3, 4, 5],
];
let resultados = ["S", "N"];

let teste = [];

function gets() {
  return teste.shift();
}

function testar() {
  let i = 1;
  while (testes.length > 0) {
    console.warn("");
    let expect = resultados.shift();
    teste = testes.shift();
    let resultado = desafio();
    if (expect === resultado) {
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

function desafio() {
  let resultado = "S";
  let quantidadeCandidatos = parseInt(gets());
  let votosRafael = parseInt(gets());
  quantidadeCandidatos--;

  while (quantidadeCandidatos > 0) {
    let votosOutroCandidato = parseInt(gets());
    if (votosOutroCandidato > votosRafael) {
      resultado = "N";
      break;
    }
    quantidadeCandidatos--;
  }

  console.log(resultado);

  return resultado;
}
