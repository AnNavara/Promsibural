'use strict';
(function() {

  var closeBtn = document.querySelectorAll('._js-small-form-btn');

  for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function(evt) {
      evt.preventDefault();

      evt.target.parentNode.parentNode.classList.remove('callback--fail');
      evt.target.parentNode.parentNode.classList.remove('callback--fine');
    };
  }

})();
