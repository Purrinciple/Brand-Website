document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.querySelector(".menu-panel");

  if (!menu || !toggle || !panel) return;

  toggle.addEventListener("click", () => {
    panel.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu")) {
      panel.classList.remove("open");
    }
  });
});