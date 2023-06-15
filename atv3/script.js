const form = document.getElementById('formExtrato');
const clienteElement = document.getElementById('cliente');
const bebidaElement = document.getElementById('bebida');
const docesElement = document.getElementById('doces');
const valorPagarElement = document.getElementById('valorPagar');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nomeCliente = document.getElementById('nomeCliente').value;
  const bebidaSelecionada = document.querySelector('input[name="bebida"]:checked').value;
  const docesSelecionados = Array.from(document.querySelectorAll('input[name="doces[]"]:checked')).map(checkbox => checkbox.value);

  const bebidaText = getBebidaText(bebidaSelecionada);
  const docesText = getDocesText(docesSelecionados);
  const valorPagar = calcularValorPagar(bebidaSelecionada, docesSelecionados);

  clienteElement.textContent = `Cliente: ${nomeCliente}`;
  bebidaElement.textContent = `Bebida: ${bebidaText}`;
  docesElement.textContent = `Doces: ${docesText}`;
  valorPagarElement.textContent = `Valor a pagar: R$ ${valorPagar.toFixed(2)}`;

  document.getElementById('extrato').style.display = 'block';
});

function getBebidaText(bebida) {
  switch (bebida) {
    case 'suco':
      return 'Suco';
    case 'refrigerante':
      return 'Refrigerante';
    case 'agua':
      return 'Água';
    default:
      return '';
  }
}

function getDocesText(doces) {
  if (doces.length === 0) {
    return 'Nenhum doce selecionado';
  } else {
    return doces.join(', ');
  }
}

function calcularValorPagar(bebida, doces) {
  let valorPagar = 0;

  switch (bebida) {
    case 'suco':
      valorPagar += 7.00;
      break;
    case 'refrigerante':
      valorPagar += 5.50;
      break;
    case 'agua':
      valorPagar += 2.50;
      break;
  }

  for (let doce of doces) {
    switch (doce) {
      case 'bolo':
        valorPagar += 7.50;
        break;
      case 'pastel':
        valorPagar += 6.00;
        break;
      case 'torta':
        valorPagar += 8.00;
        break;
    }
  }

  return valorPagar;
}
