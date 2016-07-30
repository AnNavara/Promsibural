'use strict';

(function() {

  if (!('FormData' in window)) {
    return;
  }

  var forms = document.querySelectorAll('._js-form');

  function request(data, fn) {
    var xhr = new XMLHttpRequest();

    xhr.open('post', '/send?' + (new Date()).getTime());

    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === 4) {
        fn(xhr.status, xhr.responseText);
      }
    });

    xhr.send(data);
  }

  for (var i = 0; i < forms.length; i++) {

    forms[i].addEventListener('submit', function(evt) {
      evt.preventDefault();

      var form = evt.target;
      var data = new FormData(form);

      request(data, function(status, responseText) {
        if (form.parentNode.classList.contains('modal')) {
          form.parentNode.classList.add('modal--closed');
          if (status === 200) {
            console.log(document.querySelector('.modal--thank'));
            document.querySelector('.modal--thank').classList.remove('modal--closed');
          } else {
            document.querySelector('.modal--error').classList.remove('modal--closed');
            document.querySelector('.modal--error h3').innerHTML = 'Ошибка' + '  ' + status;
            document.querySelector('.modal--error span').innerHTML = responseText;
          }
        } else {
          if (status === 200) {
            form.parentNode.classList.add('callback--fine');
          } else {
            form.parentNode.classList.add('callback--fail');
            form.parentNode.querySelector('.callback__failed span').innerHTML = status + '<br>' + responseText;
          }
        }
      });
    });
  }

})();
