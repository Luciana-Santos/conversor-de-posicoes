export default function initTrocarCalc() {
  const calcSection = document.querySelectorAll('[data-calc="section"]');

  const btnPosAtual = document.querySelector('[data-calc="btn-atual"]');
  const btnPosParaPag = document.querySelector('[data-calc="btn-total"]');

  const hideClass = 'hide';

  const esconderSection = (e) => {
    calcSection.forEach((section) => section.classList.remove(hideClass));
    const elementoPai = e.target.parentNode;
    elementoPai.classList.add(hideClass);
  };

  btnPosAtual.addEventListener('click', (e) => esconderSection(e));
  btnPosParaPag.addEventListener('click', (e) => esconderSection(e));
}
