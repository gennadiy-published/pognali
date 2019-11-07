"use strict";

(function() {
//  var keycode = {
//    ENTER: 13,
//    SPACE: 31,
//  };

  var selector = {
    BUTTON_MENU: '.js-menu-toggle',
    HEADER: '.page-header',
    MENU: '.main-nav',
  };

  var clases = {
    NOJS: 'page-header--nojs',
    OPENED: 'main-nav--opened',
    CLOSED: 'main-nav--closed',
    SCROLL: 'main-nav--scroll',
    INNER: 'main-nav--inner-page',
  };

  var header = document.querySelector(selector.HEADER);
  var menu = document.querySelector(selector.MENU);
  var button = document.querySelector(selector.BUTTON_MENU);

  if (header.classList.contains(clases.NOJS)){
    header.classList.remove(clases.NOJS);
    menu.classList.add(clases.CLOSED);
  }

  var onOpenMenu = function () {
    menu.classList.toggle(clases.CLOSED);
    menu.classList.toggle(clases.OPENED);
  };


  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (!menu.classList.contains(clases.INNER)) {
      if (scrolled > 0) {
        menu.classList.toggle(clases.SCROLL, true);
      } else {
        menu.classList.toggle(clases.SCROLL, false);
      }
    }
  };

  button.addEventListener('click', onOpenMenu);
})();

(function() {
  var selector = {
    BUTTON_OPEN_TARIFF: '.js-link-tariff-open',
    BUTTON_CLOSE_TARIFF: '.js-link-tariff-close',
    TARIFF_MODAL: '.js-tariff-modal',
  };

  var clases = {
    TARIF_OPEN: 'price__modal--show'
  };

  var onOpenTariffModal = function (evt) {
    evt.preventDefault();
    tariffModal.classList.add(clases.TARIF_OPEN);
  };

  var onCloseTariffModal = function (evt) {
    evt.preventDefault();
    tariffModal.classList.remove(clases.TARIF_OPEN);
  };

  if (document.querySelector(selector.TARIFF_MODAL)) {
    var tariffModal = document.querySelector(selector.TARIFF_MODAL);
    var buttonOpenTariff = document.querySelector(selector.BUTTON_OPEN_TARIFF);
    var buttonCloseTariff = document.querySelector(selector.BUTTON_CLOSE_TARIFF);
    buttonOpenTariff.addEventListener('click', onOpenTariffModal);
    buttonCloseTariff.addEventListener('click', onCloseTariffModal);
  }
})();

(function(){
  var selector = {
    CITY_FILTER_CLOSE_TOP: '.js-city-filter-close-top',
    CITY_FILTER_CLOSE_BOTTOM: '.js-city-filter-close-bottom',
    INPUT_ALPHABET: 'input[name=letter]',
    CITY_NAV: '.js-city-nav',
    CITY_FILTER: '.js-city-filter',
  };

  var clases = {
    SHOW_FILTER: 'city-filter--show',
  };
  
  if (document.querySelector(selector.CITY_FILTER)) {
    var cityFilterCloseTop = document.querySelector(selector.CITY_FILTER_CLOSE_TOP);
    var cityFilter = document.querySelector(selector.CITY_FILTER);
    
    var onShowFilter = function (evt) {
      evt.preventDefault();
      cityFilter.classList.toggle(clases.SHOW_FILTER);
    };
    
    cityFilterCloseTop.addEventListener('click', onShowFilter); 
  }
})();

(function(){
  var selector = {
    FIRST_LETTER: '.js-first-letter',
    CITIES: '.cities',
  };

  var clases = {
    checked: 'cities--checked',
  };

  if (document.querySelector(selector.FIRST_LETTER)) {
    var fitrsLetterTable = document.querySelector(selector.FIRST_LETTER);
    var cities = document.querySelectorAll(selector.CITIES);

    var onClickFirstLetter = function (evt) {
      var elementId = evt.target.htmlFor;
      var selector = '#l-' + elementId;
  
      if (document.querySelector(selector)) {
        for (var i = 0; i < cities.length; i++) {
          cities[i].classList.toggle(clases.checked, false);
          var newElement = document.querySelector(selector);
          newElement.classList.add(clases.checked);
        }
      }
    };

    var getAddEventListener = function (element) {
      element.addEventListener('click', onClickFirstLetter);
    };

    var firstLetters = fitrsLetterTable.querySelectorAll('label');

    for (var i = 0; i < firstLetters.length; i++) {
      getAddEventListener(firstLetters[i]);
    }
  }
})();
