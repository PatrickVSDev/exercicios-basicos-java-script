function verificarTamanhoTexto(texto) {
    if (texto.length > 10) {
      console.log(`O texto informado possui ${texto.length} caracteres. O texto é muito longo.`);
    } else {
      console.log(`Texto: ${texto}`);
      console.log("Texto dentro do limite.");
    }
  }
  
  verificarTamanhoTexto("Texto curto");
  verificarTamanhoTexto("Texto muito longo demais"); 
  