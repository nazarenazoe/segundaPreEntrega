//SECCION ALBUMS: Cambiar color del icono de favorito
document.querySelectorAll('.botonFavorito').forEach(function(heartIcon) {
    heartIcon.addEventListener('click', function() {
        heartIcon.classList.toggle('favorito-seleccionado');
    });
});