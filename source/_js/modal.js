(function() {

  var modals = document.querySelector('.modals');
  var close = modals.querySelectorAll('.modal__close');

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function(evt) {
      evt.preventDefault();
      evt.target.parentNode.classList.remove('modal--active');
      modals.classList.remove('modal--active');
    }
  }

  var ask_call = document.querySelectorAll('.contacts__request-call');

  for (var i = 0; i < ask_call.length; i++) {
    ask_call[i].onclick = function(evt) {
      evt.preventDefault();
      var modalToOpen = evt.target.dataset.modal;
      showModal(modalToOpen);
    };
  }

  function showModal(id) {
    modals.classList.add('modal--active');
    switch (id) {
      case 'ask-call':
        modals.querySelector('._js-modal_ask-call').classList.add('modal--active');
        break;
      default:
        break;
    }
  }

})();
