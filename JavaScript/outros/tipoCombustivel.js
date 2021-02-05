const colors = require("colors");

let testes = [
  [8, 1, 7, 2, 2, 4],
  [1, 1, 2, 2, 3, 3, 4],
];
let resultados = [
  ["MUITO OBRIGADO", "Alcool: 1", "Gasolina: 2", "Diesel: 0"],
  ["MUITO OBRIGADO", "Alcool: 2", "Gasolina: 2", "Diesel: 2"],
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
    resultado = [];
    let retorno = desafio();
    if (arraysIguais(expect, retorno)) {
      console.warn(`TESTE ${i} passou`.black.bgGreen);
      console.warn(`Esperava = [${expect}] resultou = [${retorno}]`);
    } else {
      console.error(`TESTE ${i} não passou`.black.bgRed);
      console.error(`Esperava = [${expect}] resultou = [${retorno}]`);
    }
    i++;
  }
}
let resultado = [];
console.log = (entrada) => {
  resultado.push(entrada);
};

testar();

function desafio() {
  let alcohol = 0;
  let gasoline = 0;
  let diesel = 0;
  let lines = [];

  while (true) {
    const read = parseInt(gets());
    lines.push(read);
    if (read === 4) {
      break;
    }
  }

  while (lines.length > 0) {
    const code = Number(lines.shift());

    switch (code) {
      case 1:
        alcohol += 1;
        break;
      case 2:
        gasoline += 1;
        break;
      case 3:
        diesel += 1;
        break;
      case 4:
        console.log("MUITO OBRIGADO");
        console.log("Alcool: " + alcohol);
        console.log("Gasolina: " + gasoline);
        console.log("Diesel: " + diesel);
        break;
    }
  }

  return resultado;
}

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
