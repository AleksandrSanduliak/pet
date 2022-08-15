/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
/* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_burger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dataFromJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dataFromJson */ "./src/js/components/dataFromJson.js");
/* harmony import */ var _components_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/smoothScroll */ "./src/js/components/smoothScroll.js");
/* harmony import */ var _components_smoothScroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_smoothScroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_paginationOurPet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paginationOurPet */ "./src/js/components/paginationOurPet.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)()); // Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);
// Фикс фулскрин-блоков
// import './functions/fix-fullheight';
// Реализация бургер-меню
// import { burger } from './functions/burger';
// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';
// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';
// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();
// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');
// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';
// Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/components/burger.js":
/*!*************************************!*\
  !*** ./src/js/components/burger.js ***!
  \*************************************/
/***/ (() => {

"use strict";


window.addEventListener("load", function () {
  let burgerClick = document.querySelector('.burger');
  let getMenu = document.querySelector('.nav');
  let x = window.matchMedia("(max-width: 767px)"); // remove white colors for Our Pets Nav Burger

  let white = document.querySelectorAll('.header--ourSubtitle, .header--ourTitle');

  function remWhColor() {
    white.forEach(function (item) {
      item.style.color = '#292929';
    });
  } // Delete rotate class and add rotateback for


  function rotateBack() {
    burgerClick.classList.remove('rotate');
    burgerClick.classList.add('rotateback');
    remWhColor();
  }

  burgerClick.addEventListener('click', function () {
    getMenu.classList.toggle('active');
    rotateBack();

    if (getMenu.classList.contains('active')) {
      burgerClick.classList.add('rotate');
      burgerClick.classList.remove('rotateback');
      white.forEach(function (item) {
        item.style.color = 'white';
      });
    } else if (x.matches) {
      rotateBack();
      remWhColor();
    }
  }); // remove navbar when user click to link

  let linkClickThenCloseBrg = document.querySelectorAll('.menu__item');
  linkClickThenCloseBrg.forEach(function (item) {
    let getReady = item.addEventListener('click', function () {
      if (getMenu.classList.contains('active')) {
        getMenu.classList.remove('active');
        burgerClick.style.top = '0px';
        rotateBack();
        remWhColor();
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/dataFromJson.js":
/*!*******************************************!*\
  !*** ./src/js/components/dataFromJson.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/js/components/modal.js");




async function loadDatat() {
  const response = await fetch('./js/data/pets.json');
  let names = await response.json();
  let key;
  let mist = document.querySelector('.card__gridwrap');
  let gridWrap = document.querySelector('.card_wrapper');

  if (mist) {
    for (key in names) {
      mist.innerHTML += "\n      <li class=\"card__body\">\n      <div class=\"card__image\"><img class=\"card-img\" src=\"".concat(names[key].img, "\" alt=\"").concat(names[key].description, "\"></div>\n              <p class=\"card__name\">").concat(names[key].name, " </p>\n\n              <button class=\"btn btn--learnmore card__btn\" id=\"learnmore\" data-modal-button=\"").concat(names[key].data, "\">Learn more</button>\n              </li>\n\n              <div id=\"").concat(names[key].data, "\" data-modal class=\"modal__wrapper hidden\">\n              <div class=\"modal__body\">\n              <img data-modal-close class=\"modal__close--btn\" src=\"./img/modal_close_button.png\" alt=\"close btn\">\n                <div class=\"modal__image\">\n                  <img src=\"").concat(names[key].img, "\" alt=\"Pet photo\" class=\"modal-img\">\n                </div>\n                <div class=\"modal__text\" data-modal>\n                  <p class=\"modal__name\">").concat(names[key].name, "</p>\n                  <p class=\"modal__dogtype\"><span class=\"modal__type\">").concat(names[key].type, "</span> - <span class=\"modal__breed\">").concat(names[key].breed, "</span></p>\n                  <p class=\"modal__desqr\">").concat(names[key].description, "</p>\n                    <div class=\"modal__about\">\n                    <p class=\"modal__about--item\">Age:<span class=\"modal__about--more\">&thinsp;").concat(names[key].age, "</span></p>\n                    <p class=\"modal__about--item\">Inoculations:<span class=\"modal__about--more\">&thinsp;").concat(names[key].inoculations, "</span></p>\n                    <p class=\"modal__about--item\">Diseases:<span class=\"modal__about--more\">&thinsp;").concat(names[key].diseases, "</span></p>\n                    <p class=\"modal__about--item\">Age:<span class=\"modal__about--more\">&thinsp;").concat(names[key].parasites, "</span></p>\n                    </div>\n                </div>\n              </div>\n            </div>\n              ");
    }

    (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.modal)();
  }
}

loadDatat();

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal)
/* harmony export */ });
function modal() {
  let btnModal = document.querySelectorAll('[data-modal-button]');
  btnModal.forEach(function (item) {
    item.addEventListener('click', function () {
      console.log(item);
      console.log(btnModal);
      const modalBtn = this.dataset.modalButton;
      const modal = document.querySelector('#' + modalBtn);

      if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
      }
    });
  });
  let getFade = document.querySelectorAll('.modal__wrapper');
  getFade.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (this === e.target) {
        this.classList.add('hidden');
      }
    });
  }); // fade click

  let modalCloseBtn = document.querySelectorAll('.modal__close--btn');
  modalCloseBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      const modalParent = this.closest('[data-modal]');
      modalParent.classList.add('hidden');
    });
  });
}

/***/ }),

/***/ "./src/js/components/paginationOurPet.js":
/*!***********************************************!*\
  !*** ./src/js/components/paginationOurPet.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/js/components/modal.js");




async function loadData() {
  const response = await fetch('./js/data/pets.json');
  let names = await response.json();
  let key;
  let list = document.querySelector('.card__grid'); // get json objects from file

  let numOfPages = 8; // change items on every pagination page
  // let xe = window.matchMedia("(max-width: 767.98px)");

  if (window.matchMedia('(max-device-width: 768.98px)').matches) {
    numOfPages = 6;
  }

  if (window.matchMedia('(max-device-width: 500.98px)').matches) {
    numOfPages = 3;
  }

  let countOfPages = Math.ceil(names.length / numOfPages);
  /** the number of pages is
      always equal to the lenght of the array **/

  let getPagiBtn = [];

  for (let i = 1; i <= countOfPages; i++) {
    let pagBtn = document.createElement('button');
    pagBtn.classList.add('btns', 'btns__number');
    pagBtn.innerHTML = i;
    let getBtnLeft = document.querySelector('.btns__right');
    getBtnLeft.insertAdjacentElement('beforeBegin', pagBtn);
    getPagiBtn.push(pagBtn);
  }

  showPages(getPagiBtn[0]); // let getPagiBtn = document.querySelectorAll('.btns__number');

  for (let pagiBtn of getPagiBtn) {
    pagiBtn.addEventListener('click', function () {
      showPages(this);
    });
  }

  function showPages(pagiBtn) {
    let pageNum = +pagiBtn.innerHTML;
    let start = (pageNum - 1) * numOfPages;
    let end = start + numOfPages;
    let notes = names.slice(start, end);
    list.innerHTML = '';

    for (key of notes) {
      list.innerHTML += "\n        <li class=\"card__body\">\n        <div class=\"card__image\"><img class=\"card-img\" src=\"".concat(key.img, "\" alt=\"").concat(key.description, "\"></div>\n                <p class=\"card__name\">").concat(key.name, " </p>\n\n                <button class=\"btn btn--learnmore card__btn\" id=\"learnmore\" data-modal-button=\"").concat(key.data, "\">Learn more</button>\n                </li>\n\n                <div id=\"").concat(key.data, "\" data-modal class=\"modal__wrapper hidden\">\n                <div class=\"modal__body\">\n                <img data-modal-close class=\"modal__close--btn\" src=\"./img/modal_close_button.png\" alt=\"close btn\">\n                  <div class=\"modal__image\">\n                    <img src=\"").concat(key.img, "\" alt=\"Pet photo\" class=\"modal-img\">\n                  </div>\n                  <div class=\"modal__text\" data-modal>\n                    <p class=\"modal__name\">").concat(key.name, "</p>\n                    <p class=\"modal__dogtype\"><span class=\"modal__type\">").concat(key.type, "</span> - <span class=\"modal__breed\">").concat(key.breed, "</span></p>\n                    <p class=\"modal__desqr\">").concat(key.description, "</p>\n                      <div class=\"modal__about\">\n                      <p class=\"modal__about--item\">Age:<span class=\"modal__about--more\">&thinsp;").concat(key.age, "</span></p>\n                      <p class=\"modal__about--item\">Inoculations:<span class=\"modal__about--more\">&thinsp;").concat(key.inoculations, "</span></p>\n                      <p class=\"modal__about--item\">Diseases:<span class=\"modal__about--more\">&thinsp;").concat(key.diseases, "</span></p>\n                      <p class=\"modal__about--item\">Age:<span class=\"modal__about--more\">&thinsp;").concat(key.parasites, "</span></p>\n                      </div>\n                  </div>\n                </div>\n              </div>\n                ");
    }

    (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.modal)();
  }
}

loadData();

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ (() => {

let btnNext = document.querySelector('.card__arrow--right');
let btnPrev = document.querySelector('.card__arrow--left');
let gridElem = document.querySelector('.card__gridwrap');
let left = 0;
let getWrap = document.querySelector('.card_wrapper');

if (gridElem) {
  btnPrev.addEventListener('click', function () {
    // slide left
    left = left + 210;

    if (left > 250) {
      left = 0;
    }

    gridElem.style.left = left + 'px';
  });
  btnNext.addEventListener('click', function () {
    // slide right
    left = left - 210;

    if (left < -1200) {
      left = 0;
    }

    gridElem.style.left = left + 'px';
  });
}

/***/ }),

/***/ "./src/js/components/smoothScroll.js":
/*!*******************************************!*\
  !*** ./src/js/components/smoothScroll.js ***!
  \*******************************************/
/***/ (() => {

"use strict";


let getScroll = document.querySelectorAll('[data-scroll]');
getScroll.forEach(function (ev) {
  ev.addEventListener('click', function (item) {
    item.preventDefault();
    const getHref = this.getAttribute('href').slice(1);
    let getClass = document.getElementsByClassName(getHref);
    getClass[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map