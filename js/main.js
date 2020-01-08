'use strict'

window.addEventListener('load', function() {
  // Se agrego un hiperenlace al titulo
  const btnNombre = document.querySelector('.link');
  btnNombre.style.cursor = "pointer";
  btnNombre.addEventListener('click', () => {
    const main = window.location.href = "index.html";
  });

  // información para obtener la ruta 
  // https://cybmeta.com/obtener-la-url-de-la-pagina-actual-con-javascript-y-sus-componentes
  
  var nombredeRuta = window.location.pathname;
  
  if (nombredeRuta == '/index.html') {
    console.log('Se encuentra en la página index.');
  }
  else if (nombredeRuta == '/portafolio.html') {
    console.log('Se encuentra en la página portafolio.');
  }
  else if (nombredeRuta == '/contacto.html') {
    console.log('Se encuentra en la página contacto.');
  }
  
});