const arrayMaiorQue5 = [1, 2, 3, 4, 5, 6, 7];

const arrayMenorQue5 = [1, 2, 3];

function verificarEImprimir(array) {
  if (array.length > 5) {
    console.log("Elementos do array:");
    for (let i = 0; i < array.length; i++) {
      console.log(`Elemento ${i + 1}: ${array[i]}`);
    }
    console.log(`Array com um total de ${array.length} elementos.`);
  } else {
    console.log("Poucos elementos foram recebidos.");
  }
}

verificarEImprimir(arrayMaiorQue5);
verificarEImprimir(arrayMenorQue5);
