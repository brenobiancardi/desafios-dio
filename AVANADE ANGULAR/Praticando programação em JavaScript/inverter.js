const colors = require("colors"); //printar com cor no console

let testes = ["1234", "9876543210", "154647515"];
let resultados = ["4321", "0123456789", "515746451"];

function gets() {
  return testes.shift();
}

function testar() {
  let i = 1;
  while (testes.length > 0) {
    let expect = resultados.shift();
    let resultado = desafio();
    if (resultado === expect) {
      console.warn("");
      console.warn(`TESTE ${i} passou`.black.bgGreen);
      console.warn(`Esperava = [${expect}] resultou = [${resultado}]`);
    } else {
      console.error("");
      console.error(`TESTE ${i} não passou`.black.bgRed);
      console.error(`Esperava = [${expect}] resultou = [${resultado}]`);
    }
    i++;
  }
}

// console.log = (entrada) => {
//   return entrada; //para nao printar
// };

testar();

function desafio() {
  const input = gets();

  function inverter(stringInverter) {
    let stringInvertida = "";
    for (i = stringInverter.length - 1; i > -1; i--) {
      stringInvertida += stringInverter[i];
    }
    return stringInvertida;
  }

  let resultado = inverter(input);
  console.log(resultado);

  return resultado;
}
