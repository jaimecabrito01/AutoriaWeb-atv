function escreverDataPorExtenso(data) {
  const partes = data.split('/');
  const dia = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10);
  const ano = parseInt(partes[2], 10);

  const meses = [
    '', 'janeiro', 'fevereiro', 'março', 'abril',
    'maio', 'junho', 'julho', 'agosto',
    'setembro', 'outubro', 'novembro', 'dezembro'
  ];

  if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    return 'Data inválida';
  }

  if (mes < 1 || mes > 12) {
    return 'Mês inválido';
  }

  const dataPorExtenso = `${dia} de ${meses[mes]} de ${ano}`;
  return dataPorExtenso;
}

function exibirDataPorExtenso() {
  const dataInput = document.getElementById('dataInput').value;
  const resultadoElement = document.getElementById('resultado');

  const dataPorExtenso = escreverDataPorExtenso(dataInput);
  resultadoElement.textContent = dataPorExtenso;
}
