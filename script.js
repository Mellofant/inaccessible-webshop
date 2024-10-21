/** LISTEN TO USER INTERACTIONS */

document
  .getElementById('send-feedback-button')
  .addEventListener('click', validateForm);

document
  .getElementById('imprint-link')
  .addEventListener('focus', showImprintModal);

document
  .getElementById('shopping-cart-button')
  .addEventListener('click', showShoppingCartModal);

document
  .getElementById('shopping-cart-close')
  .addEventListener('click', closeShoppingCartModal);

/** DEFINE THE FUNCTIONS TO REACT TO USER INTERACTIONS */

function validateForm() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const captcha = document.getElementById('captcha');

  if (
    firstName.value === 'John' &&
    lastName.value === 'Doe' &&
    captcha.value == 4
  ) {
    alert('Thank you for giving us your feedback!');
  }

  if (firstName.value !== 'John') {
    firstName.setAttribute('error', true);
  } else {
    firstName.setAttribute('error', false);
  }

  if (lastName.value !== 'Doe') {
    lastName.setAttribute('error', true);
  } else {
    lastName.setAttribute('error', false);
  }

  if (captcha.value != 4) {
    captcha.setAttribute('error', true);
  } else {
    captcha.setAttribute('error', false);
  }
}

function showImprintModal() {
  document.getElementById('imprint-modal-container').classList.add('visible');
}

function showShoppingCartModal() {
  document
    .getElementById('shopping-cart-modal-container')
    .classList.add('visible');
}

function closeShoppingCartModal() {
  document
    .getElementById('shopping-cart-modal-container')
    .classList.remove('visible');
}

/** CODE TO LET THE SLIDESHOW AUTORUN */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 1500); // Change image every 1.5 seconds
}
