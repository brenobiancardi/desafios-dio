const colors = require("colors");

function testar() {
  let testes = [[], []];
  let resultados = [];

  let i = 1;
  while (testes.length > 0) {
    let expect = resultados.shift();
    let resultado = desafio(testes.shift());
    if (resultado === expect) {
      console.warn("");
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
  return entrada; //para nao printar
};

testar();

function desafio(input) {
  //implementar aqui a funcao desafio

  return resultado;
}
