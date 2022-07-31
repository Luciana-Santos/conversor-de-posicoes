export default function initPosicaoPagina() {
  const form = document.querySelector('.calc__form');
  const btnPosAtual = document.querySelector('[data-calc="btn-atual"]');

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
      const valorPosicao = Math.trunc(totalPosicoesValue / totalPaginasValue);
      window.localStorage.setItem('posUnica', valorPosicao);
      mostrarResultado(valorPosicao);

      form.reset();
      btnPosAtual.style.display = 'block';
    } else {
      alert('Insira um valor.');
    }
  }

  btnCalcular.addEventListener('click', converterPosicoes);
}
