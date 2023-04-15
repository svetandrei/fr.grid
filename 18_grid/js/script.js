/**
 * Tabs
 * @type {NodeListOf<Element>}
 */
let tabsBtn = document.querySelectorAll('.tabs__link');
let tabsItem = document.querySelectorAll('.tabs__content')

tabsBtn.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    let currBtn = e.currentTarget.dataset.path;
    console.log(currBtn);

    if (!this.classList.contains('tabs__active')) {
      tabsBtn.forEach(btn => btn.classList.remove('tabs__active'));
      this.classList.add('tabs__active');

      tabsItem.forEach((item) => {
        item.classList.remove('tabs__content-active');
        if (item.dataset.target === currBtn) {
          item.classList.add('tabs__content-active');
        }
      });
    }
  });
});

/**
 * Slider
 * @type {Swiper}
 */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-controls',
    clickable: true,
  },
  navigation: false,

});

/**
 * Burger menu
 * @type {Element}
 */
let burger = document.querySelector('.burger');
let links = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function (){
  this.classList.toggle('burger__active');
  document.querySelector('.' + this.dataset.menu).classList.toggle('header__nav-active');
  document.body.classList.toggle('stop-scroll')
});

links.forEach(function(el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger__active');
    document.querySelector('.header__nav').classList.remove('header__nav-active');
    document.body.classList.remove('stop-scroll');
  });
});

/**
 * Search open/close
 * @type {Element}
 */
let btnSearch = document.querySelector('.btn-search');
let closeSearch = document.querySelectorAll('.search__close');

btnSearch.addEventListener('click', function (){
  if (!this.classList.contains('active')) {
    document.querySelector('.header__search-mob').classList.add('active');
    this.classList.add('active');
    document.querySelector('.header__nav').classList.remove('header__nav-active');
    burger.classList.remove('burger__active');
  }
});

closeSearch.forEach((close) => {
  close.addEventListener('click', function (){
    btnSearch.classList.remove('active');
    document.querySelector('.header__search-mob').classList.remove('active');
  });
});



/**
 * Accordion
 * @type {NodeListOf<Element>}
 */
let accordionTitle = document.querySelectorAll('.accordion__title');

accordionTitle.forEach((accordBtn) => {
  accordBtn.addEventListener('click', function () {
    if (!this.classList.contains('active')) {
      accordionTitle.forEach((el) => {
        el.classList.remove('active');
        el.nextElementSibling.classList.remove('active');
      });
    }
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  });
})


