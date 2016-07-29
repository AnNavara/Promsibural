'use strict';
(function() {

  var slider = document.querySelector('.slider');
  var activeSlide = "slider-1";

  var slideList = slider.querySelectorAll("[name=slider-control]");

  for (var i = 0; i < slideList.length; i++) {
    slideList[i].onclick = function(evt) {
      var clickedElementID = evt.target.id;
      setActiveSlide(clickedElementID);
    };
  }

  function setActiveSlide(id) {
    if (activeSlide === id) {
      return;
    }
    activeSlide = id;
    switchSlide(activeSlide);
  }

  function switchSlide(slideToShow) {
    slider.querySelector('.slider__item--active').classList.remove('slider__item--active');
    slider.querySelector('[data-id=' + slideToShow + ']').classList.add('slider__item--active');
  }

})();
