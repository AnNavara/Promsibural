'use strict';
(function() {

  var tabs = document.querySelector('.tabs');
  var activeTab = 'tab-other';

  var tabsList = tabs.querySelectorAll('.tabs__button');
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
    tabs.querySelector('#' + activeTab).classList.remove('tabs__button--active');
    tabs.querySelector('#' + id).classList.add('tabs__button--active');
    activeTab = id;
    switchTab(activeTab);
  }

  function switchTab(tabToShow) {
    tabs.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
    tabs.querySelector('[data-id=' + tabToShow + ']').classList.add('tabs__item--active');
  }

})();
