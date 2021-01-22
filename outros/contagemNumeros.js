const maxReads = parseInt(gets());
var numbers = [];

function read(qtd) {
  while (qtd > 0) {
    let input = parseInt(gets());
    numbers.push(input);
    qtd = qtd - 1;
  }
}

read(maxReads);

numbers.sort((a, b) => a - b);

while (numbers.length > 0) {
  const filtered = numbers.filter((value) => value === numbers[0]);
  numbers = numbers.filter((value) => value !== numbers[0]);
  console.log(filtered[0] + " aparece " + filtered.length + " vez(es)");
}
