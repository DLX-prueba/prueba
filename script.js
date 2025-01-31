let nombreUsuario = '';
let avatarSeleccionado = '';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado correctamente.');

    if (window.location.pathname.includes('index.html')) {
        configurarIntro();
    } else if (window.location.pathname.includes('room.html')) {
        mostrarHabitacion();
    } else if (window.location.pathname.includes('game.html')) {
        iniciarJuego();
    } else {
        console.log('No se detectó una página válida para la configuración.');
    }
});

function configurarIntro() {
    console.log('Configurando la página de introducción...');

    // Selección de avatares
    const avatarOpciones = document.querySelectorAll('.avatar-opcion');
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
        });
    });

    // Configuración del botón "Continuar"
    const botonContinuar = document.getElementById('botonContinuar');
    if (!botonContinuar) {
        console.error('No se encontró el botón Continuar.');
    } else {
        botonContinuar.addEventListener('click', () => {
            console.log('Botón Continuar presionado.');

            // Obtener el nombre ingresado
            nombreUsuario = document.getElementById('nombreUsuarioInput').value;
            console.log('Nombre ingresado:', nombreUsuario);

            if (nombreUsuario && avatarSeleccionado) {
                console.log('Redirigiendo a la habitación...');
                localStorage.setItem('nombreUsuario', nombreUsuario);
                localStorage.setItem('avatarSeleccionado', avatarSeleccionado);
                window.location.href = 'room.html';
            } else {
                alert('Por favor, ingresá tu nombre y seleccioná un avatar.');
            }
        });
    }
}

function mostrarHabitacion() {
    console.log('Configurando la habitación del usuario...');

    nombreUsuario = localStorage.getItem('nombreUsuario');
    avatarSeleccionado = localStorage.getItem('avatarSeleccionado');

    if (!nombreUsuario || !avatarSeleccionado) {
        console.error('No se encontraron datos del usuario en localStorage.');
        return;
    }

    document.getElementById('nombreUsuario').innerText = nombreUsuario;
    document.getElementById('avatarSeleccionado').src = avatarSeleccionado;
}

function iniciarJuego() {
    console.log('Iniciando el juego...');

    nombreUsuario = localStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
        document.getElementById('nombreUsuario').innerText = `👤 ${nombreUsuario}`;
        console.log('Juego iniciado para:', nombreUsuario);
    } else {
        console.error('No se encontró el nombre del usuario en localStorage.');
    }
}

