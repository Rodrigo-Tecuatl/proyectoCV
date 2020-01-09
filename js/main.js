'use strict'

window.addEventListener('load', function() {
  // Se agrego un hiperenlace al titulo
  const btnNombre = document.querySelector('.link');
  btnNombre.style.cursor = "pointer";
  btnNombre.addEventListener('click', () => {
    const main = window.location.href = "index.html";
  });
});