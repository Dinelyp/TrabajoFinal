window.onload = function () { 
    visor1 = document.getElementById("visor"); 
    mititulo = document.getElementById("titulo"); 
}
function mifoto(num) { 
    f = "img/foto" + num + ".png"; 
    document.images["fotoVisor"].src = f; 
    t = document.images["fotos" + num].alt; 
    mititulo.innerHTML = t; 
    principal.style.display = "block";
}

// Cuando se usa el boton de cerrar
function cerrar() { 
    principal.style.display = "none";
  }