const form = document.getElementById('formCalculadora');
const totalPagarElement = document.getElementById('totalPagar');
const valorPrestacaoElement = document.getElementById('valorPrestacao');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const precoVista = parseFloat(document.getElementById('precoVista').value);
  const parcelas = parseInt(document.getElementById('parcelas').value);

  let totalPagar = precoVista;
  let valorPrestacao = 0;

  if (parcelas === 3) {
    totalPagar += (totalPagar * 0.1);
  } else if (parcelas === 5) {
    totalPagar += (totalPagar * 0.2);
  }

  valorPrestacao = totalPagar / parcelas;

  totalPagarElement.textContent = `Total a pagar: R$ ${totalPagar.toFixed(2)}`;
  valorPrestacaoElement.textContent = `Valor da prestação: R$ ${valorPrestacao.toFixed(2)}`;

  document.getElementById('resultado').style.display = 'block';
});