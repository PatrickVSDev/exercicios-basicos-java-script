const calculadora = {
    somar: function (a, b) {
      return a + b;
    },
    subtrair: function (a, b) {
      return a - b;
    },
    multiplicar: function (a, b) {
      return a * b;
    },
    dividir: function (a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return "Não é possível dividir por zero.";
      }
    },
  };

  console.log("Soma:", calculadora.somar(5, 3));
  console.log("Subtração:", calculadora.subtrair(8, 2));
  console.log("Multiplicação:", calculadora.multiplicar(4, 6));
  console.log("Divisão:", calculadora.dividir(10, 2));
  console.log("Tentativa de divisão por zero:", calculadora.dividir(8, 0));
  