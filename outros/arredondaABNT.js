arrayteste = [
  "7",
  "7.2",
  "5.25",
  "5.26",
  "4.666666666666667",
  "1.66",
  "4.850",
  "4.8500000001",
  "4.550",
];

while (arrayteste.length > 0) {
  console.log();
  console.log("resultado: " + arredonda(arrayteste.shift()));
}

function arredonda(mediaString) {
  console.log("entrada: " + mediaString);
  let regex = /(\.[0-9]{1,})/;
  dizimas = regex.exec(mediaString);
  if (!dizimas) {
    return mediaString;
  }
  dizimas = dizimas[0] + "00";

  if (dizimas.length > 2) {
    if (Number(dizimas[2]) > 5) {
      console.log("numero > 5: " + dizimas[2]);
      mediaString = parseInt(mediaString * 10 + 1) / 10;
    } else if (dizimas[2] === "5") {
      console.log("dizimasAlemdo5: " + dizimas.slice(3));
      if (
        dizimas
          .slice(3)
          .split("")
          .some((valor) => Number(valor) > 0)
      ) {
        console.log("dizimasAlem do 5 != 0 " + dizimas.slice(3));
        mediaString = parseInt(mediaString * 10 + 1) / 10;
      } else {
        if (Number(dizimas[1]) % 2 === 0) {
          console.log("numero[3] par" + dizimas[3]);
          mediaString = parseInt(mediaString * 10) / 10;
        } else {
          console.log("numero[3] impar" + dizimas[3]);
          mediaString = parseInt(mediaString * 10 + 1) / 10;
        }
      }
    }
  }
  return mediaString;
}
