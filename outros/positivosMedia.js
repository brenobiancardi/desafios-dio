arrayteste = [
  [7, -5, 6, -3.4, 4.6, 12],
  [1, 2, 3, 4, 5, 6],
  [0.01, 0.4, 0.02, 5, -1, -3],
  [0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
  [1, -2, 3, -4, 5, 8],
  [2, -2, 3, -5, 7, 9],
  [2, 2, 3, 5, 7, 9],
  [-1, -1, -1, 1, -1, -1],
  [2, -2, 3, -5, 7, 9],
  [0, 0, 0, 0, 0, 0],
];
while (arrayteste.length > 0) {
  testar(arrayteste.shift());
}

function testar(entradasTeste) {
  console.log(entradasTeste);

  function gets() {
    return entradasTeste.shift();
  }

  let valoresPositivos = [];
  for (i = 0; i < 6; i++) {
    let input = gets();
    if (Number(input) >= 0) {
      valoresPositivos.push(Number(input));
    }
  }

  const QuantidadePositivos = valoresPositivos.length;
  const media = valoresPositivos.reduce(mediaArray);
  console.log(`${QuantidadePositivos} valores positivos`);
  console.log(arredonda(media.toString()));

  function mediaArray(soma, valorAtual, indice) {
    soma = soma + valorAtual;
    if (indice === QuantidadePositivos - 1) {
      return soma / QuantidadePositivos;
    } else {
      return soma;
    }
  }

  function arredonda(mediaString) {
    if (Number(mediaString) < 1) {
      return Number(mediaString).toFixed(1);
    }
    let regex = /(\.[0-9]{1,})/;
    let dizimas = regex.exec(mediaString);
    if (!dizimas) {
      return mediaString;
    }
    dizimas = dizimas[0] + "00";

    if (dizimas.length > 2) {
      if (Number(dizimas[2]) > 5) {
        mediaString = parseInt(mediaString * 10 + 1) / 10;
      } else if (dizimas[2] === "5") {
        if (
          dizimas
            .slice(3)
            .split("")
            .some((valor) => Number(valor) > 0)
        ) {
          mediaString = parseInt(mediaString * 10 + 1) / 10;
        } else {
          if (Number(dizimas[1]) % 2 === 0) {
            mediaString = parseInt(mediaString * 10) / 10;
          } else {
            mediaString = parseInt(mediaString * 10 + 1) / 10;
          }
        }
      }
    }
    return mediaString.toString();
  }
}
