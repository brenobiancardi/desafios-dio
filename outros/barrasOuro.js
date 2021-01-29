const colors = require("colors");

let testes = [
  "6 10 ",
  "0 10 10 10 10 10",
  "1 4 7",
  "5 1 2",
  "3 5 3",
  "2 5 2",
  "6 5 2",
  "3 10",
  "10 10 12",
  "1 2 5",
  "2 3 7",
  "5 9 ",
  "5 2 6 3 6",
  "1 2 1",
  "2 3 1",
  "2 4 1",
  "2 5 1",
  "",
];

let resultados = [];

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
    //implementar teste e apagar essa linha
    if (false) {
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
  //implementar aqui a funcao desafio

  return resultado;
}
//para testes de objetos
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
