document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Aquí podrías agregar validaciones adicionales si es necesario
        // Por ejemplo, comprobar credenciales contra un servidor o base de datos

        // Redirigir a la página de usuario
        window.location.href = 'user_pag.html';
    });
});
