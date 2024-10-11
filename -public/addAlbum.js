/* AGREGAR ALBUMS */
// CODIGO QUE NO PERMITE DEJAR VACIO ALGUN CAMPO 
const form = document.querySelector('form');
const TituloAlbumInput = document.getElementById('TituloAlbum');
const añoInput = document.getElementById('año');
const descripcionInput = document.getElementById('descripcion');
const imagenUrlInput = document.getElementById('imagenUrl');


// Cuando el usuario aprete "Editar"
form.addEventListener('submit', function(event) {
    event.preventDefault(); // No hacemos que se envie el formulario

    // Capturamos el valor de Titulo Album, Descripcion y URL
    const TituloAlbum = TituloAlbumInput.value;
    const año = añoInput.value;
    const descripcion = descripcionInput.value;
    const imagenUrl = imagenUrlInput.value;

    // Si el campo está vacío
    if (!TituloAlbum || !descripcion || !imagenUrl || !año) {
        swal("Error", "Completa todos los campos!", "warning");
        return; // Paramos el código aquí si falta algo
    }

    // Si todo okk
    swal("Perfecto!", "Has agregado un album correctamente.", "success").then(() => {
        form.submit(); // Enviamos el formulario
    });
});
 