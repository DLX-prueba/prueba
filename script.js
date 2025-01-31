let nombreUsuario = '';
let avatarSeleccionado = '';

// Esperamos que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado correctamente.');

    // Detectar la página en la que estamos
    if (window.location.pathname.includes('index.html')) {
        configurarIntro();
    } else if (window.location.pathname.includes('room.html')) {
        mostrarHabitacion();
    } else if (window.location.pathname.includes('game.html')) {
        iniciarJuego();
    }
});

// Función para configurar la página de inicio (index.html)
function configurarIntro() {
    console.log('Configurando la página de introducción...');

    // Selección de avatares
    const avatarOpciones = document.querySelectorAll('.avatar-opcion');
    const mensajeError = document.getElementById('mensajeError');

    // Verificamos si hay avatares
    if (avatarOpciones.length === 0) {
        console.error('No se encontraron avatares en la página.');
    }

    // Detectar la selección de un avatar
    avatarOpciones.forEach(avatar => {
        avatar.addEventListener('click', () => {
            console.log('Avatar clickeado:', avatar.getAttribute('data-avatar'));

            // Remover la selección previa de otros avatares
            avatarOpciones.forEach(a => a.classList.remove('selected'));
            avatar.classList.add('selected');

            // Guardar el avatar seleccionado
            avatarSeleccionado = avatar.getAttribute('data-avatar');
            console.log('Avatar seleccionado:', avatarSeleccionado);

            // Ocultar el mensaje de error si estaba visible
            mensajeError.classList.add('oculto');
        });
    });

    // Configuración del botón "Continuar"
    const botonContinuar = document.getElementById('botonContinuar');
    botonContinuar.addEventListener('click', () => {
        console.log('Botón Continuar presionado.');

        // Obtener el nombre ingresado
        nombreUsuario = document.getElementById('nombreUsuarioInput').value;
        console.log('Nombre ingresado:', nombreUsuario);

        // Validamos que se haya ingresado el nombre y se haya seleccionado un avatar
        if (nombreUsuario && avatarSeleccionado) {
            console.log('Redirigiendo a la habitación...');
            localStorage.setItem('nombreUsuario', nombreUsuario);
            localStorage.setItem('avatarSeleccionado', avatarSeleccionado);
            window.location.href = 'room.html';
        } else {
            // Mostrar mensaje de error si faltan datos
            mensajeError.textContent = 'Es necesario completar los datos para continuar.';
            mensajeError.classList.remove('oculto');
            console.error('Faltan datos: nombre o avatar no seleccionado.');
        }
    });
}

// Función para mostrar los datos del usuario en room.html
function mostrarHabitacion() {
    console.log('Configurando la habitación del usuario...');

    // Recuperamos nombre y avatar desde localStorage
    nombreUsuario = localStorage.getItem('nombreUsuario');
    avatarSeleccionado = localStorage.getItem('avatarSeleccionado');

    // Verificamos que los datos existan
    if (nombreUsuario && avatarSeleccionado) {
        console.log('Nombre recuperado:', nombreUsuario);
        console.log('Avatar recuperado:', avatarSeleccionado);

        // Mostramos los datos en la página
        document.getElementById('nombreUsuario').innerText = nombreUsuario;
        document.getElementById('avatarSeleccionado').src = avatarSeleccionado;
    } else {
        console.error('No se encontraron datos en localStorage.');
        // En caso de que no haya datos, redirigimos al usuario a la página inicial
        window.location.href = 'index.html';
    }
}

// Función para iniciar el juego (game.html)
function iniciarJuego() {
    console.log('Iniciando el juego...');

    // Recuperamos el nombre del usuario
    nombreUsuario = localStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
        document.getElementById('nombreUsuario').innerText = `👤 ${nombreUsuario}`;
        console.log('Juego iniciado para:', nombreUsuario);
    } else {
        console.error('No se encontró el nombre del usuario en localStorage.');
    }

    // Aquí va la lógica del juego (que puedes completar más adelante)
}

