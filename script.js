
let nombreUsuario = '';
let avatarSeleccionado = '';

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('index.html')) {
        configurarIntro();
    } else if (window.location.pathname.includes('room.html')) {
        mostrarHabitacion();
    } else if (window.location.pathname.includes('game.html')) {
        iniciarJuego();
    }
});

function configurarIntro() {
    const avatarOpciones = document.querySelectorAll('.avatar-opcion');
    avatarOpciones.forEach(avatar => {
        avatar.addEventListener('click', () => {
            avatarOpciones.forEach(a => a.classList.remove('selected'));
            avatar.classList.add('selected');
            avatarSeleccionado = avatar.getAttribute('data-avatar');
        });
    });

    document.getElementById('botonContinuar').addEventListener('click', () => {
        nombreUsuario = document.getElementById('nombreUsuarioInput').value;
        if (nombreUsuario && avatarSeleccionado) {
            localStorage.setItem('nombreUsuario', nombreUsuario);
            localStorage.setItem('avatarSeleccionado', avatarSeleccionado);
            window.location.href = 'room.html';
        } else {
            alert('Por favor, ingresá tu nombre y seleccioná un avatar.');
        }
    });
}

function mostrarHabitacion() {
    nombreUsuario = localStorage.getItem('nombreUsuario');
    avatarSeleccionado = localStorage.getItem('avatarSeleccionado');

    document.getElementById('nombreUsuario').innerText = nombreUsuario;
    document.getElementById('avatarSeleccionado').src = avatarSeleccionado;
}

function iniciarJuego() {
    nombreUsuario = localStorage.getItem('nombreUsuario');
    document.getElementById('nombreUsuario').innerText = `👤 ${nombreUsuario}`;

    // Lógica del juego aquí...
}
