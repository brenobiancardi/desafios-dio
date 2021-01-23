const colors = require("colors");

let testes = [
  [
    2,
    "carne laranja suco picles laranja picles",
    "laranja pera laranja pera pera",
  ],
];
let resultados = [["carne laranja picles suco", "laranja pera"]];

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

let variavelTeste = [];
console.log = (entrada) => {
  variavelTeste.push(entrada); //para nao printar
};

testar();

function desafio() {
  const quantidade = parseInt(gets());

  for (let i = 0; i < quantidade; i++) {
    let listaCompras = [];
    let input = gets();

    let lista = input.split(" ");

    let listaOrdenada = lista.sort();

    while (listaOrdenada.length > 0) {
      const objeto = listaOrdenada.shift();
      if (!listaCompras.some((value) => value == objeto)) {
        listaCompras.push(objeto);
      }
    }

    console.log(listaCompras.join(" "));
  }

  resultado = variavelTeste;
  variavelTeste = [];
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
