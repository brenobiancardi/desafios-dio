const colors = require("colors");

let testes = [25, 100, 5.5, 1, 200, 20.5, 6, 145, 15.55];
let resultados = [
  ["NUMBER = 25", "SALARY = U$ 550.00"],
  ["NUMBER = 1", "SALARY = U$ 4100.00"],
  ["NUMBER = 6", "SALARY = U$ 2254.75"],
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
    if (arraysIguais(resultado, expect)) {
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
  variavelTeste.push(entrada); //para o teste
};

testar();

function desafio() {
  let numeroFuncionario = parseInt(gets());
  let horasTrabalhadas = parseInt(gets());
  let valorHora = parseFloat(gets());
  let salario = parseFloat(horasTrabalhadas * valorHora).toFixed(2);
  console.log("NUMBER = " + numeroFuncionario);
  console.log("SALARY = U$ " + salario);

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
