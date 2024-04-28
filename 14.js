const livroJSON = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    ISBN: "978-0-2611-0522-9",
  };
  
  
  function imprimirInformacoesDoLivro(livro) {
    console.log(`Título: "${livro.titulo}"`);
    console.log(`Autor: "${livro.autor}"`);
    console.log(`Ano de Publicação: "${livro.anoPublicacao}"`);
    console.log(`Gênero: "${livro.genero}"`);
    console.log(`ISBN: "${livro.ISBN}"`);
  }
  

  imprimirInformacoesDoLivro(livroJSON);
  