'use strict';

(function() {

  var modalOverlay = document.querySelector('.modal--overlay');
  var btnModalAsk = document.querySelectorAll('._js-ask-call');
  var btnModalEstim = document.querySelectorAll('._js-estim-deal');
  var modalAsk = document.querySelector('.modal--ask-call');
  var modalEstim = document.querySelector('.estim-deal');
  var closeBtn = document.querySelectorAll('._js-modal-close');

  function openModal(element) {
    modalOverlay.classList.remove('modal--closed');
    element.classList.remove('modal--closed');
  }

  function closeModal(element) {
    modalOverlay.classList.add('modal--closed');
    element.parentNode.classList.add('modal--closed');
  }

  for (var i = 0; i < btnModalAsk.length; i++) {
    btnModalAsk[i].onclick = function(evt) {
      evt.preventDefault();
      openModal(modalAsk);
    };
  }

  for (var l = 0; l < btnModalEstim.length; l++) {
    btnModalEstim[l].onclick = function(evt) {
      evt.preventDefault();
      openModal(modalEstim);
    };
  }

  for (var k = 0; k < closeBtn.length; k++) {
    closeBtn[k].onclick = function(evt) {
      evt.preventDefault();
      var clickedElement = evt.target;
      closeModal(clickedElement);
    };
  }


})();
