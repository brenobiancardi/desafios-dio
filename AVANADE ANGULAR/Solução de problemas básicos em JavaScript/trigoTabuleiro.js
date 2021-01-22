function gets() {
  return entradasTeste.shift();
}

// var entradasTeste = [3, 7, 19, 14];
var entradasTeste = [9, 0, 8, 16, 24, 32, 40, 48, 56, 64];
// var entradasTeste = [9, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let n = parseInt(gets());

while (n > 0) {
  let x = parseInt(gets());

  let quantidade = BigInt(1);
  for (let i = 0; i < x; i++) {
    quantidade = quantidade + BigInt(Math.pow(2, i) - 1);
  }
  quantidade * BigInt(x);
  let totalKg = quantidade / 12000n;
  console.log(totalKg + " kg");
  n--;
}
console.log(BigInt(Math.pow(2, 64)) * 64n);
