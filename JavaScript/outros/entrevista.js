var inputs = [
  "sanduicheiche",
  "barrilarril",
  "ratoato",
  "sol",
  "coliseueu",
  "queijoijo",
  "astroAstro",
  "a",
  "astromataastro",
];

function searchRepeat(term) {
  let i = -1;
  let length = -1 * term.length;
  let aux = "";
  let findedRepeat = "";
  while (length < i) {
    aux = term.slice(i);
    aux = new RegExp(aux, "gi");
    let finder = term.match(aux);
    if (finder.length > 1) {
      findedRepeat = finder[0];
      i--;
    } else {
      aux = findedRepeat.concat(findedRepeat);
      aux = new RegExp(aux, "gi");
      break;
    }
  }
  return term.replace(aux, findedRepeat);
}

inputs.map((value) => console.log(searchRepeat(value)));
