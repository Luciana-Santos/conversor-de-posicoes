export default function initPosicaoPagina() {
  const totalPosicoes = document.querySelector('[data-calc="posicoes-input"]');
  const totalPaginas = document.querySelector('[data-calc="paginas-input"]');
  const btnCalcular = document.querySelector('[data-calc="btn-calcular"]');
  const resultado = document.querySelector('[data-res="posicao-unica"]');

  function mostrarResultado(res) {
    resultado.innerText = res;
  }

  function converterPosicoes(e) {
    e.preventDefault();
    const totalPosicoesValue = totalPosicoes.value;
    const totalPaginasValue = totalPaginas.value;
    if (totalPosicoesValue !== '' && totalPaginasValue !== '') {
      const valorPosicao = (totalPosicoesValue / totalPaginasValue).toFixed(2);
      window.localStorage.setItem('posUnica', valorPosicao);
      mostrarResultado(valorPosicao);
    } else {
      alert('Insira um valor.');
    }
  }

  btnCalcular.addEventListener('click', converterPosicoes);
}
