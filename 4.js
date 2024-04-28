function verificarIdadeParaAutoescola(idade) {
    if (idade >= 18) {
      console.log("Você pode entrar na autoescola.");
    } else {
      console.log("Desculpe, você não pode entrar na autoescola. É necessário ter pelo menos 18 anos.");
    }
  }
  
  verificarIdadeParaAutoescola(20); 
  verificarIdadeParaAutoescola(16);