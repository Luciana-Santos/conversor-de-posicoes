/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/js/modules/posicaoAtual.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/posicaoAtual.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPosicaoAtual)
/* harmony export */ });
function initPosicaoAtual() {
  var paginaAtual = document.querySelector('[data-calc="atual-input"]');
  var btnCalcular = document.querySelector('[data-calc="btn-posUnica"]');
  var pagAtualElement = document.querySelector('[data-res="pag-atual"]');
  var posAtualElement = document.querySelector('[data-res="posicao-atual"]');

  function calcPosicaoAtual(e) {
    e.preventDefault();
    var posUnica = window.localStorage.getItem('posUnica');
    var paginaAtualValue = paginaAtual.value;
    var posAtualValue = Math.trunc(paginaAtualValue * posUnica);
    pagAtualElement.innerText = paginaAtualValue;
    posAtualElement.innerText = posAtualValue;
  }

  btnCalcular.addEventListener('click', calcPosicaoAtual);
}

/***/ }),

/***/ "./src/app/js/modules/posicaoPagina.js":
/*!*********************************************!*\
  !*** ./src/app/js/modules/posicaoPagina.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPosicaoPagina)
/* harmony export */ });
function initPosicaoPagina() {
  var form = document.querySelector('.calc__form');
  var btnPosAtual = document.querySelector('[data-calc="btn-atual"]');
  var totalPosicoes = document.querySelector('[data-calc="posicoes-input"]');
  var totalPaginas = document.querySelector('[data-calc="paginas-input"]');
  var btnCalcular = document.querySelector('[data-calc="btn-calcular"]');
  var resultado = document.querySelector('[data-res="posicao-unica"]');

  function mostrarResultado(res) {
    resultado.innerText = res;
  }

  function converterPosicoes(e) {
    e.preventDefault();
    var totalPosicoesValue = totalPosicoes.value;
    var totalPaginasValue = totalPaginas.value;

    if (totalPosicoesValue !== '' && totalPaginasValue !== '') {
      var valorPosicao = Math.trunc(totalPosicoesValue / totalPaginasValue);
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

/***/ }),

/***/ "./src/app/js/modules/trocarCalc.js":
/*!******************************************!*\
  !*** ./src/app/js/modules/trocarCalc.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTrocarCalc)
/* harmony export */ });
function initTrocarCalc() {
  var calcSection = document.querySelectorAll('[data-calc="section"]');
  var btnPosAtual = document.querySelector('[data-calc="btn-atual"]');
  var btnPosParaPag = document.querySelector('[data-calc="btn-total"]');
  var hideClass = 'hide';

  var esconderSection = function esconderSection(e) {
    calcSection.forEach(function (section) {
      return section.classList.remove(hideClass);
    });
    var elementoPai = e.target.parentNode;
    elementoPai.classList.add(hideClass);
  };

  btnPosAtual.addEventListener('click', function (e) {
    return esconderSection(e);
  });
  btnPosParaPag.addEventListener('click', function (e) {
    return esconderSection(e);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/app/js/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_posicaoAtual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/posicaoAtual */ "./src/app/js/modules/posicaoAtual.js");
/* harmony import */ var _modules_posicaoPagina__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/posicaoPagina */ "./src/app/js/modules/posicaoPagina.js");
/* harmony import */ var _modules_trocarCalc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/trocarCalc */ "./src/app/js/modules/trocarCalc.js");



(0,_modules_trocarCalc__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_posicaoPagina__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_posicaoAtual__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map