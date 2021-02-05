const colors = require("colors");

let testes = [
  ["6 10 ", "0 10 10 10 10 10", "1 4 7", "5 1 2", "3 5 3", "2 5 2", "6 5 2"],
  ["3 10", "10 10 12", "1 2 5", "2 3 7"],
  ["5 9 ", "5 2 6 3 6", "1 2 1", "2 3 1", "2 4 1", "2 5 1"],
];
let teste = [];
let resultados = [44, 58, 10];

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

// console.log = (entrada) => {
//   return entrada; //para nao printar
// };

testar();

function desafio() {
  let taxFeuds = [];
  let feudsRoutes = {};
  let feudsClosed = [];
  let feudsOpened = [];

  const [numCities, loadCapacity] = gets().split(" ");
  taxFeuds = gets().split(" ");

  taxFeuds = taxFeuds.map((value) => parseInt(value));
  feudsOpened = taxFeuds.map((value, index) => index + 1);

  for (let i = 1; i < numCities; i++) {
    const [cityA, cityB, distance] = gets().split(" ");
    if (!feudsRoutes[cityA]) {
      feudsRoutes[cityA] = {};
    }
    if (!feudsRoutes[cityB]) {
      feudsRoutes[cityB] = {};
    }
    Object.defineProperty(feudsRoutes[cityA], cityB, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: parseInt(distance),
    });
    Object.defineProperty(feudsRoutes[cityB], cityA, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: parseInt(distance),
    });
  }

  return "resultado";
}
