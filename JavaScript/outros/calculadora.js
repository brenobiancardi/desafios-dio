const inputsdebug = [
  "20",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
  "9 *",
];
const maxReads = parseInt(gets());

function read(qtd) {
  let total = 1;
  while (qtd > 0) {
    let input = gets();
    const inputs = [input[0], input[2]];
    if (total < 99999999999) {
      if (inputs[1] === "*") {
        total = total * inputs[0];
      } else if ((inputs[1] === "/") & (inputs[0] > 0)) {
        total = total / inputs[0];
      }
    } else {
      if (inputs[1] === "*") {
        total = BigInt(total) * BigInt(inputs[0]);
      } else if ((inputs[1] === "/") & (inputs[0] > 0)) {
        total = BigInt(total) / BigInt(inputs[0]) + BigInt(1);
      }
    }
    qtd = qtd - 1;
  }

  console.log(total.toString());
}

if ((maxReads >= 1) & (maxReads < 100001)) {
  read(maxReads);
} else {
  console.log(1);
}
function gets() {
  return inputsdebug.shift();
}
