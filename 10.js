const frase = "um texto qualquer";

function fraseParaArray(frase) {
  const arrayDePalavras = frase.split(" ");
  return arrayDePalavras;
}

const newArr = fraseParaArray(frase);

console.log(newArr.join(" "));
