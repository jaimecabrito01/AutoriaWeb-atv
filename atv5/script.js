function calcularOperacoes() {
    // Obtém os números digitados pelo usuário
    const num1 = parseInt(document.getElementById('num1').value, 10);
    const num2 = parseInt(document.getElementById('num2').value, 10);
  
    // Verifica se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, insira números válidos.');
      return;
    }
  
    // Realiza as operações aritméticas
    const soma = num1 + num2;
    const produto = num1 * num2;
    const divisao = num1 / num2;
    const resto = num1 % num2;
  
    // Cria a tabela dinamicamente
    const tabela = document.createElement('table');
    tabela.innerHTML = `
      <tr>
        <th>Operação</th>
        <th>Valor</th>
      </tr>
      <tr>
        <td>Soma</td>
        <td>${soma}</td>
      </tr>
      <tr>
        <td>Produto</td>
        <td>${produto}</td>
      </tr>
      <tr>
        <td>Divisão</td>
        <td>${divisao}</td>
      </tr>
      <tr>
        <td>Resto</td>
        <td>${resto}</td>
      </tr>
    `;
  
    // Obtém o elemento de destino e adiciona a tabela a ele
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    resultadoDiv.appendChild(tabela);
  }
  