export default function initPosicaoAtual() {
  const paginaAtual = document.querySelector('[data-calc="atual-input"]');
  const btnCalcular = document.querySelector('[data-calc="btn-posUnica"]');
  const pagAtualElement = document.querySelector('[data-res="pag-atual"]');
  const posAtualElement = document.querySelector('[data-res="posicao-atual"]');

  function calcPosicaoAtual(e) {
    e.preventDefault();
    const posUnica = window.localStorage.getItem('posUnica');
    const paginaAtualValue = paginaAtual.value;
    const posAtualValue = Math.trunc(paginaAtualValue * posUnica);

    pagAtualElement.innerText = paginaAtualValue;
    posAtualElement.innerText = posAtualValue;
  }

  btnCalcular.addEventListener('click', calcPosicaoAtual);
}
