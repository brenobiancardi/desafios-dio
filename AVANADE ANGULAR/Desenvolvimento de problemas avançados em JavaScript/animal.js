const colors = require("colors");

let testes = [
  ["vertebrado", "mamifero", "onivoro"],
  ["vertebrado", "ave", "carnivoro"],
  ["invertebrado", "anelideo", "onivoro"],
];
let resultados = ["homem", "aguia", "minhoca"];

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

console.log = (entrada) => {
  return entrada; //para nao printar
};

testar();

function desafio() {
  const animal = {
    vertebrado: {
      ave: { carnivoro: "aguia", onivoro: "pomba" },
      mamifero: { onivoro: "homem", herbivoro: "vaca" },
    },
    invertebrado: {
      inseto: { hematofago: "pulga", herbivoro: "lagarta" },
      anelideo: { hematofago: "sanguessuga", onivoro: "minhoca" },
    },
  };

  const estrutura = gets();
  const classe = gets();
  const alimentacao = gets();

  const resultado = animal[estrutura][classe][alimentacao];

  console.log(resultado);

  return resultado;
}
