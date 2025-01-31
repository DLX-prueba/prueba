let nombreUsuario = '';
let avatarSeleccionado = '';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado correctamente.');

    if (window.location.pathname.includes('index.html')) {
        configurarIntro();
    }
});

function configurarIntro() {
    console.log('Configurando la página de introducción...');

    // Selección de avatares
    const avatarOpciones = document.querySelectorAll('.avatar-opcion');
    const mensajeError = document.getElementById('mensajeError');

    if (avatarOpciones.length === 0) {
        console.error('No se encontraron avatares en la página.');
    }

    avatarOpciones.forEach(avatar => {
        avatar.addEventListener('click', () => {
            console.log('Avatar clickeado:', avatar.getAttribute('data-avatar'));

            // Remover selección de otros avatares
            avatarOpciones.forEach(a => a.classList.remove('selected'));
            avatar.classList.add('selected');

            // Guardar el avatar seleccionado
            avatarSeleccionado = avatar.getAttribute('data-avatar');
            console.log('Avatar seleccionado:', avatarSeleccionado);

            // Ocultar mensaje de error si estaba visible
            mensajeError.classList.add('oculto');
        });
    });

    // Configuración del botón "Continuar"
    const botonContinuar = document.getElementById('botonContinuar');
    if (!botonContinuar) {
        console.error('No se encontró el botón Continuar.');
        return;
    }

    botonContinuar.addEventListener('click', () => {
        console.log('Botón Continuar presionado.');

        // Obtener el nombre ingresado
        nombreUsuario = document.getElementById('nombreUsuarioInput').value;
        console.log('Nombre ingresado:', nombreUsuario);

        // Validar los datos antes de redirigir
        if (nombreUsuario && avatarSeleccionado) {
            console.log('Redirigiendo a la habitación...');
            localStorage.setItem('nombreUsuario', nombreUsuario);
            localStorage.setItem('avatarSeleccionado', avatarSeleccionado);
            window.location.href = 'room.html';
        } else {
            // Mostrar mensaje de error
            mensajeError.textContent = 'Es necesario completar los datos para continuar.';
            mensajeError.classList.remove('oculto');
            console.error('Faltan datos: nombre o avatar no seleccionado.');
        }
    });
}

