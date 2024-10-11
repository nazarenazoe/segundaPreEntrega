// CODIGO QUE NO PERMITE DEJAR VACIO ALGUN CAMPO Y CONTRASEÑA MENOR A 6 CARACTERES
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
// Cuando el usuario apriete "Acceder"
form.addEventListener('submit', function(event) {
    event.preventDefault(); // No hacemos que se envie el formulario

    // Capturamos el valor de email y contraseña
    const email = emailInput.value;
    const password = passwordInput.value;

    // Si el campo está vacío
    if (!email || !password) {
        swal("Error", "Completa todos los campos!", "warning");
        return; // Paramos el código aquí si falta algo
    }

    // Si la contraseña es menor a 6 caracteres
    if (password.length < 6) {
        swal("Contraseña muy corta", "La contraseña debe tener al menos 6 caracteres.", "error");
        return;
    }

    // Si todo okk
    swal("Perfecto!", "Has accedido correctamente.", "success").then(() => {
        form.submit(); // Enviamos el formulario
    });
});

// Mostrar el mensaje de "Tu contraseña es demasiado corta" 
passwordInput.addEventListener('input', function () {
    if (passwordInput.value.length < 6) {
        passwordError.style.display = 'inline'; /* inline: mostrar elemento */
    } else {
        passwordError.style.display = 'none'; /* none: no mostrar elemento */
    }
});