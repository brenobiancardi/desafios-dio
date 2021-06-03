//const colors = require("colors");

let testes = [2, 3, "100 80 90", 4, "100 120 30 50"];
let resultados = [1, 0];

function gets() {
  return testes.shift();
}

function testar() {
  let i = 1;
  while (testes.length > 0) {
    console.warn("");
    let expect = resultados.shift();
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

let respostasGeradas = [];
console.log = (entrada) => {
  respostasGeradas.push(entrada);
};

testar();

function desafio() {
  let totalDeCasos = parseInt(gets());

  while (totalDeCasos > 0) {
    const numeroClientes = parseInt(gets());
    let nPrecisaramMudar = 0;
    const clientes = gets().split(" ");

    let clientesOrdenados = clientes
      .map((valor) => Number(valor))
      .sort((a, b) => b - a);

    // clientesOrdenados = clientesOrdenados
    console.log("clientes: ", clientes);
    console.log("clientesOrdenados: ", clientesOrdenados);
    for (let i = 0; i < numeroClientes; i++) {
      console.log(i);
      console.log(clientes[i]);
      console.log(clientesOrdenados[i]);
      if (Number(clientes[i]) === clientesOrdenados[i]) {
        nPrecisaramMudar++;
      }
    }

    console.log(nPrecisaramMudar);

    totalDeCasos--;
  }
  return respostasGeradas;
}
