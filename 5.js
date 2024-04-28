function verificarTipoNumero(dado) {
    if (typeof dado === 'number') {
      console.log("O dado é do tipo number.");
    } else {
      console.log("O dado não é do tipo number.");
    }
  }
  
  function verificarTipoBoolean(dado) {
    if (typeof dado === 'boolean') {
      console.log("O dado é do tipo boolean.");
    } else {
      console.log("O dado não é do tipo boolean.");
    }
  }
  
  function verificarTipoString(dado) {
    if (typeof dado === 'string') {
      console.log("O dado é do tipo string.");
    } else {
      console.log("O dado não é do tipo string.");
    }
  }
  
  verificarTipoNumero(42);       
  verificarTipoBoolean(true);     
  verificarTipoString("Olá");     
  verificarTipoNumero("123");   
  verificarTipoString(true);      
  