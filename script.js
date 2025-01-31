let nombreUsuario = '';
let avatarSeleccionado = '';

// Esperamos que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado correctamente en index.html.');

    // Selección de avatares
    const avatarOpciones = document.querySelectorAll('.avatar-opcion');
    const mensajeError = document.getElementById('mensajeError');

    avatarOpciones.forEach(avatar => {
        avatar.addEventListener('click', () => {
            // Remover la selección previa de otros avatares
            avatarOpciones.forEach(a => a.classList.remove('selected'));
            avatar.classList.add('selected');

            // Guardar el avatar seleccionado
            avatarSeleccionado = avatar.getAttribute('data-avatar');
            console.log('Avatar seleccionado:', avatarSeleccionado);

            // Ocultar mensaje de error si estaba visible
            mensajeError.classList.add('oculto');
        });
    });

    // Evento de clic en el botón "Continuar"
    document.getElementById('botonContinuar').addEventListener('click', () => {
        // Obtener el nombre ingresado
        nombreUsuario = document.getElementById('nombreUsuarioInput').value;
        console.log('Nombre ingresado:', nombreUsuario);

        if (nombreUsuario && avatarSeleccionado) {
            // Guardar en localStorage
            localStorage.setItem('nombreUsuario', nombreUsuario);
            localStorage.setItem('avatarSeleccionado', avatarSeleccionado);

            // Redirigir a la página de la habitación
            window.location.href = 'room.html';
        } else {
            // Mostrar mensaje de error
            mensajeError.textContent = 'Es necesario completar los datos para continuar.';
            mensajeError.classList.remove('oculto');
        }
    });
});