const colors = require("colors");

let testes = [576, 11257, 503, 89, 1950, 1850];
let resultados = [
  {
    100: "5 nota(s) de R$ 100,00",
    50: "1 nota(s) de R$ 50,00",
    20: "1 nota(s) de R$ 20,00",
    10: "0 nota(s) de R$ 10,00",
    5: "1 nota(s) de R$ 5,00",
    2: "0 nota(s) de R$ 2,00",
    1: "1 nota(s) de R$ 1,00",
  },
  {
    100: "112 nota(s) de R$ 100,00",
    50: "1 nota(s) de R$ 50,00",
    20: "0 nota(s) de R$ 20,00",
    10: "0 nota(s) de R$ 10,00",
    5: "1 nota(s) de R$ 5,00",
    2: "1 nota(s) de R$ 2,00",
    1: "0 nota(s) de R$ 1,00",
  },
  {
    100: "5 nota(s) de R$ 100,00",
    50: "0 nota(s) de R$ 50,00",
    20: "0 nota(s) de R$ 20,00",
    10: "0 nota(s) de R$ 10,00",
    5: "0 nota(s) de R$ 5,00",
    2: "1 nota(s) de R$ 2,00",
    1: "1 nota(s) de R$ 1,00",
  },
  {
    100: "0 nota(s) de R$ 100,00",
    50: "1 nota(s) de R$ 50,00",
    20: "1 nota(s) de R$ 20,00",
    10: "1 nota(s) de R$ 10,00",
    5: "1 nota(s) de R$ 5,00",
    2: "2 nota(s) de R$ 2,00",
    1: "0 nota(s) de R$ 1,00",
  },
  {
    100: "19 nota(s) de R$ 100,00",
    50: "1 nota(s) de R$ 50,00",
    20: "0 nota(s) de R$ 20,00",
    10: "0 nota(s) de R$ 10,00",
    5: "0 nota(s) de R$ 5,00",
    2: "0 nota(s) de R$ 2,00",
    1: "0 nota(s) de R$ 1,00",
  },
  {
    100: "18 nota(s) de R$ 100,00",
    50: "1 nota(s) de R$ 50,00",
    20: "0 nota(s) de R$ 20,00",
    10: "0 nota(s) de R$ 10,00",
    5: "0 nota(s) de R$ 5,00",
    2: "0 nota(s) de R$ 2,00",
    1: "0 nota(s) de R$ 1,00",
  },
];

function gets() {
  return testes.shift();
}

function testar() {
  let i = 1;
  while (testes.length > 0) {
    console.warn("");
    let expect = resultados.shift();
    let resultado = desafio();
    if (objetoEquivalente(resultado, expect)) {
      console.warn(`TESTE ${i} passou`.black.bgGreen);
    } else {
      console.error(`TESTE ${i} não passou`.black.bgRed);
    }
    i++;
  }
}

console.log = (entrada) => {
  return entrada; //para nao printar
};

testar();

function desafio() {
  let input = parseInt(gets());
  console.log(input);
  let notasPossiveis = [100, 50, 20, 10, 5, 2, 1];
  let resposta = {};

  notasPossiveis.forEach((value) => calculaNota(value));

  function calculaNota(valorNota) {
    let numNota = Math.floor(input / valorNota);
    if (numNota >= 1) {
      input = input - numNota * valorNota;
    }
    resposta[valorNota] = `${numNota} nota(s) de R$ ${valorNota},00`;
  }

  while (notasPossiveis.length > 0) {
    console.log(resposta[notasPossiveis.shift()]);
  }

  return resposta;
}

function objetoEquivalente(a, b) {
  var propriedadesA = Object.getOwnPropertyNames(a);
  var propriedadesB = Object.getOwnPropertyNames(b);

  if (propriedadesA.length != propriedadesB.length) {
    return false;
  }

  for (let i = 0; i < propriedadesA.length; i++) {
    let propriedade = propriedadesA[i];

    if (a[propriedade] !== b[propriedade]) {
      return false;
    }
  }

  return true;
}
