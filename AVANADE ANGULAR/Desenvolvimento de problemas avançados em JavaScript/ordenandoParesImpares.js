const colors = require("colors");

let testes = [
  [4, 10, 5, 6, 7],
  [10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98],
];
let resultados = [
  [6, 10, 7, 5],
  [4, 32, 34, 98, 654, 3456, 6789, 567, 543, 87],
];

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
    if (arraysIguais(expect, resultado)) {
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
  const quantidade = parseInt(gets());
  let pares = [];
  let impares = [];

  for (let i = 0; i < quantidade; i++) {
    const input = parseInt(gets());

    if (input % 2 === 0) {
      pares.push(input);
    } else {
      impares.push(input);
    }
  }

  pares.sort((a, b) => a - b);
  impares.sort((a, b) => b - a);
  const resultado = pares.concat(impares);

  for (let i = 0; i < quantidade; i++) {
    console.log(resultado[i]);
  }

  return resultado;
}
//teste de arrays
function arraysIguais(a, b) {
  if (a.length != b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
