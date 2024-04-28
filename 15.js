const meuJSON = {
    nome: "John Doe",
    idade: 30,
    cidade: "Exemploville",
    email: "john.doe@example.com",
    ativo: true,
  };
  
  function converterJSONParaObjeto(json) {
    const objetoConvertido = JSON.parse(json);
    console.log("Objeto convertido:", objetoConvertido);
  }
  
  converterJSONParaObjeto(JSON.stringify(meuJSON));
  