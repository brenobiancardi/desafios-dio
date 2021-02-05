var entradasTeste = [3, 40.0, 200.0, 300.0];

function gets() {
  return entradasTeste.shift();
}

// complete as variaveis necessarias
let n = parseInt(gets());

while (n > 0) {
  let c = parseFloat(gets());
  let dias = 0;
  while (c > 1) {
    c = c / 2;
    dias++;
  }
  console.log(`${dias}  dias`);
  n--;
}
