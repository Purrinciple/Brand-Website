const element = document.querySelector('.my-element');
element.addEventListener('click', function() {
  this.classList.toggle('is-active');
});
