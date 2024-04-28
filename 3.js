function gerarNumeroAleatorio(maximo) {
   
    return Math.floor(Math.random() * (maximo + 1));
  }

  const numeroAleatorio = gerarNumeroAleatorio(10);
  console.log(`Número aleatório: ${numeroAleatorio}`);
  