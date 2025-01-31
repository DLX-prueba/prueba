document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado correctamente.');

    // Leer texto en voz alta
    document.getElementById('leerTexto').addEventListener('click', () => {
        const texto = document.body.innerText;  // Leer todo el texto de la página
        const speech = new SpeechSynthesisUtterance(texto);
        speech.lang = "es-ES";
        speech.rate = 1; // Puedes ajustar la velocidad de lectura
        window.speechSynthesis.speak(speech);
    });

    // Cambiar tamaño de fuente
    document.getElementById('agrandarTexto').addEventListener('click', () => {
        document.body.style.fontSize = '1.5em';  // Aumenta el tamaño del texto
    });

    document.getElementById('achicarTexto').addEventListener('click', () => {
        document.body.style.fontSize = '1em';  // Restaura el tamaño normal
    });

    // Selección de avatar con efecto visual
    const avatarOpciones = document.querySelectorAll('.avatar-opcion');
    avatarOpciones.forEach(avatar => {
        avatar.addEventListener('click', () => {
            avatarOpciones.forEach(a => a.classList.remove('selected'));  // Resetear selección
            avatar.classList.add('selected');  // Agregar clase 'selected'
        });
    });

    // Botón "Continuar"
    document.getElementById('botonContinuar').addEventListener('click', () => {
        const nombreUsuario = document.getElementById('nombreUsuarioInput').value;
        let avatarSeleccionado = document.querySelector('.avatar-opcion.selected');
        
        if (nombreUsuario && avatarSeleccionado) {
            localStorage.setItem('nombreUsuario', nombreUsuario);
            localStorage.setItem('avatarSeleccionado', avatarSeleccionado.getAttribute('data-avatar'));
            window.location.href = 'room.html';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
