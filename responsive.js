
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function(e) {
    if (window.matchMedia("(hover: none)").matches) {
      
      // if overlay not active → activate it
      if (!this.classList.contains('active')) {
        e.preventDefault();
        this.classList.add('active');
      }
    }
  });
});
