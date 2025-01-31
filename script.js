let nombreUsuario = '';
let avatarSeleccionado = '';

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

function configurarIntro() {
    console.log('Configurando la página de introducción...');

    // Selección de avatares
    const avatarOpciones = document.querySelectorAll('.avatar-opcion');
    avatarOpciones.forEach(avatar => {
        avatar.addEventListener('click', () => {
            // Remover selección previa de todos los avatares
            avatarOpciones.forEach(a => a.classList.remove('selected'));
            avatar.classList.add('selected');

            // Guardar el avatar seleccionado
            avatarSeleccionado = avatar.getAttribute('data-avatar');
            console.log('Avatar seleccionado:', avatarSeleccionado);
        });
    });

    // Evento de clic en el botón "Continuar"
    document.getElementById('botonContinuar').addEventListener('click', () => {
        console.log('Botón Continuar presionado');

        // Obtener el nombre ingresado
        nombreUsuario = document.getElementById('nombreUsuarioInput').value;
        console.log('Nombre ingresado:', nombreUsuario);

        if (nombreUsuario && avatarSeleccionado) {
            console.log('Nombre y avatar completos. Redirigiendo a la habitación...');
            localStorage.setItem('nombreUsuario', nombreUsuario);
            localStorage.setItem('avatarSeleccionado', avatarSeleccionado);
            window.location.href = 'room.html';
        } else {
            alert('Por favor, ingresá tu nombre y seleccioná un avatar.');
        }
    });
}

function mostrarHabitacion() {
    console.log('Configurando la habitación del usuario...');

    // Recuperar nombre y avatar desde el almacenamiento local
    nombreUsuario = localStorage.getItem('nombreUsuario');
    avatarSeleccionado = localStorage.getItem('avatarSeleccionado');

    console.log('Nombre recuperado:', nombreUsuario);
    console.log('Avatar recuperado:', avatarSeleccionado);

    // Mostrar los datos en la página
    document.getElementById('nombreUsuario').innerText = nombreUsuario;
    document.getElementById('avatarSeleccionado').src = avatarSeleccionado;
}

function iniciarJuego() {
    console.log('Iniciando el juego...');

    // Recuperar el nombre del usuario
    nombreUsuario = localStorage.getItem('nombreUsuario');
    document.getElementById('nombreUsuario').innerText = `👤 ${nombreUsuario}`;

    // Lógica del juego aquí (simplificada)
    console.log('Juego iniciado para:', nombreUsuario);
}

