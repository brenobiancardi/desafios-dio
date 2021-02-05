// var inputs = ["abc", "def"];
// var inputs = ["abc", "def", "abcdef"];
// function repeatedString(string, index) {
//   let array = [...inputs];
//   array.splice(index, 1);
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].indexOf(string) >= 0) {
//       return -1;
//     }
//   }
//   return 0;
// }

// // while (true) {
// let i = 0;
// let answer = 0;
// while (i < inputs.length) {
//   answer = repeatedString(inputs[i], i);
//   if (answer === -1) {
//     console.log("Conjunto Ruim");
//     break;
//   }
//   i++;
// }
// if (answer === 0) {
//   console.log("Conjunto Bom");
// }
// }

var inputs = [];

function read(quantity) {
  while (quantity > 0) {
    let line = gets();
    inputs.push(line);
    quantity--;
  }
}

function repeatedString(string, index) {
  let array = [...inputs];
  array.splice(index, 1);
  for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf(string) >= 0) {
      return -1;
    }
  }
  return 0;
}

function prefixSearch() {
  let i = 0;
  let answer = 0;
  while (i < inputs.length) {
    answer = repeatedString(inputs[i], i);
    if (answer === -1) {
      console.log("Conjunto Ruim");
      break;
    }
    i++;
  }
  if (answer === 0) {
    console.log("Conjunto Bom");
  }
}

while (true) {
  let qtty = parseInt(gets());
  if (qtty < 1) {
    break;
  }
  read(qtty);

  prefixSearch();

  inputs = [];
}
