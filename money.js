
const timeline = document.querySelector('.currency-timeline');

timeline.addEventListener('wheel', (e) => {
  e.preventDefault();
  timeline.scrollLeft += e.deltaY;
});