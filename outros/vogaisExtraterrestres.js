var inputs = [];

function read() {
  while (true) {
    let input = gets();
    if (input) {
      inputs.push(input);
    } else {
      break;
    }
  }
}

function searchVowel(vowels, phrase) {
  const findedVowels = [];
  const vowelsToSearch = vowels.split("");
  const phraseWithVowels = phrase.split("");
  let i = vowelsToSearch.length - 1;
  while (i >= 0) {
    findedVowels.push(
      phraseWithVowels.filter((value) => value === vowelsToSearch[i])
    );
    i--;
  }
  console.log(findedVowels.flat(1).length);
}

read();

let qtd = 0;
while (qtd < inputs.length) {
  searchVowel(inputs[qtd], inputs[qtd + 1]);
  qtd = qtd + 2;
}
