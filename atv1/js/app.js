// Definindo os objetos de cada item do cardápio
const cardapio = {
    100: { nome: "Cachorro quente", preco: 4.20 },
    101: { nome: "Bauru simples", preco: 10.30 },
    102: { nome: "Bauru com ovo", preco: 12.50 },
    103: { nome: "Hambúrguer", preco: 9.20 },
    104: { nome: "Cheeseburguer", preco: 15.30 },
    105: { nome: "Refrigerante", preco: 6.00 }
  };
  
  function calcularValor(codigo, quantidade) {
    if (cardapio.hasOwnProperty(codigo)) {
      const item = cardapio[codigo];
      const valorTotal = item.preco * quantidade;
      return `Total a pagar pelo lanche ${item.nome}: R$ ${valorTotal.toFixed(2)}`;
    } else {
      return "Código de item inválido!";
    }
  }
  
  const codigoInput = document.getElementById("codigo");
  const quantidadeInput = document.getElementById("quantidade");
  const form = document.querySelector('.form');
  const resultadoDiv = document.getElementById("resultado");
  
  function calcularValor(codigo, quantidade) {
    if (cardapio.hasOwnProperty(codigo)) {
      const item = cardapio[codigo];
      const valorTotal = item.preco * quantidade;
      const mensagem = `Total a pagar pelo lanche ${item.nome}: R$ ${valorTotal.toFixed(2)}`;
      return mensagem;
    } else {
      return "Código de item inválido!";
    }
  }
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const codigo = parseInt(codigoInput.value);
    const quantidade = parseInt(quantidadeInput.value);
  
    const resultado = calcularValor(codigo, quantidade);
  
    Swal.fire({
      title: 'Resultado',
      text: resultado,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  });
  
  