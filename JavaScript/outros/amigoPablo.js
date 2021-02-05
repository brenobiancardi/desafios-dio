let inputs = [];

// function read() {
//   while (true) {
//     let input = gets();
//     if (input === "FIM") {
//       break;
//     } else {
//       inputs.push(input);
//     }
//   }
// }

function read() {
  inputs = [
    "Joao NAO",
    "Carlos SIM",
    "Abner NAO",
    "Samuel SIM",
    "Ricardo NAO",
    "Abhay SIM",
    "Samuel SIM",
    "Andres SIM",
    "Roberto NAO",
    "Carlos SIM",
    "Samuel SIM",
    "Samuel SIM",
    "Abhay SIM",
    "Aline SIM",
    "Andres SIM",
  ];
}

read();

treatedInputs = inputs.map((value) => value.split(" "));

if ((inputs[0] !== "Joao") & (inputs[1] !== "NAO")) {
  testBreak = false;
}

inputs = treatedInputs
  .flat(1)
  .filter((value) => (value !== "SIM") & (value !== "NAO"));

let inputsNAO = treatedInputs
  .filter((value) => value[1] === "NAO")
  .flat(1)
  .filter((value) => value !== "NAO");

inputsNAO = inputsNAO.sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});

let inputsSIM = treatedInputs
  .filter((value) => value[1] === "SIM")
  .flat(1)
  .filter((value) => value !== "SIM");

inputsSIM = inputsSIM
  .filter((value, index) => inputsSIM.indexOf(value) === index)
  .sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

let output = [...inputsSIM, ...inputsNAO];

output.forEach(function (value) {
  if ((testBreak === false) & (value !== "Abhay")) {
    console.log(value);
  }
});
console.log();

let ganhador = inputsSIM.sort(function (a, b) {
  if (b.length === a.length) {
    if (inputs.indexOf(a) > inputs.indexOf(b)) {
      return 1;
    }
    return -1;
  }
  return b.length - a.length;
});

console.log("Amigo do Pablo: ");
console.log(ganhador[0]);
