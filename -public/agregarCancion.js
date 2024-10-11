/* AGREGAR CANCIO */
// CODIGO QUE NO PERMITE DEJAR VACIO ALGUN CAMPO 
const form = document.querySelector('form');
const TituloCancionInput = document.getElementById('TituloCancion');
const duracionCancionInput = document.getElementById('duracionCancion');
const enlaceUrlInput = document.getElementById('enlaceUrl');


// Cuando el usuario aprete "Agregar"
form.addEventListener('submit', function(event) {
    event.preventDefault(); // No hacemos que se envie el formulario

    // Capturamos el valor de Titulo Cancion, Duracion y URL
    const TituloCancion = TituloCancionInput.value;
    const duracionCancion = duracionCancionInput.value;
    const enlaceUrl = enlaceUrlInput.value;

    // Si el campo está vacío
    if (!TituloCancion|| !duracionCancion || !enlaceUrl) {
        swal("Error", "Completa todos los campos!", "warning");
        return; // Paramos el código aquí si falta algo
    }

    // Si todo okk
    swal("Perfecto!", "Has agregado una canción correctamente.", "success").then(() => {
        form.submit(); // Enviamos el formulario
    });
});