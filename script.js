'use strict';

let btnShowModal = document.querySelectorAll('.show-modal');
let btnCloseModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

//functions hellpers

let removeHideClass = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

let closeModalScapeKey = function (e, fn) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    fn();
  }
};
//Adding button functionality.

btnShowModal.forEach(btn => {
  btn.addEventListener('click', removeHideClass);
});

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  closeModalScapeKey(e, closeModal);
});
