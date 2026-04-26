
document.querySelectorAll('.project-link').forEach(link => {
  let tapped = false;

  link.addEventListener('click', function(e) {
    if (!tapped && window.matchMedia("(hover: none)").matches) {
      e.preventDefault();
      tapped = true;
      this.classList.add('active');

      setTimeout(() => tapped = false, 1000);
    }
  });
});
