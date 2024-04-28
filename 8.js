function imprimirNumerosImparesDecrescentes(numero) {
    while (numero > 0) {
      if (numero % 2 !== 0) {
        console.log(numero);
      }
      numero--;
    }
  }
  
  imprimirNumerosImparesDecrescentes(10);
  