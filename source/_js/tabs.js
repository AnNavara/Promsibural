'use strict';
(function() {

  var tab = document.querySelector('.tab');
  var activeTab = 'tab-other';

  var tabsList = tab.querySelectorAll('.tabs__button');
  for (var i = 0; i < tabsList.length; i++) {
    tabsList[i].onclick = function(evt) {
      evt.preventDefault();
      var clickedElementID = evt.target.id;
      setActiveTab(clickedElementID);
    };
  }

  function setActiveTab(id) {
    if (activeTab === id) {
      return;
    }
    tab.querySelector('#' + activeTab).classList.remove('tabs__button--active');
    tab.querySelector('#' + id).classList.add('tabs__button--active');
    activeTab = id;
    switchTab(activeTab);
  }

  function switchTab(tabToShow) {
    tab.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
    tab.querySelector('[data-id=' + tabToShow + ']').classList.add('tabs__item--active');
  }

})();
