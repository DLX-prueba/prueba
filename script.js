document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado correctamente.');

    // Recuperar nombre y avatar desde localStorage
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const avatarSeleccionado = localStorage.getItem('avatarSeleccionado');

    // Verificar que los datos existan
    if (nombreUsuario && avatarSeleccionado) {
        document.getElementById('nombreUsuario').innerText = nombreUsuario;
        document.getElementById('avatarSeleccionado').src = avatarSeleccionado;
    } else {
        console.error('No se encontraron datos en localStorage.');
        window.location.href = 'index.html';  // Redirige si no hay datos
    }

    // Cuento con palabras erróneas
    let cuento = {
        texto: "Había una <span class='error' id='error1'>ves</span> un león <span class='error' id='error2'>feróz</span> que <span class='error' id='error3'>comia</span> zanahorias.",
        correcciones: { 'error1': 'vez', 'error2': 'feroz', 'error3': 'comía' },
        nivel: 1
    };

    // Asegurémonos de que el cuento se cargue correctamente en la página
    document.getElementById('cuentoTexto').innerHTML = cuento.texto;

    // Función para corregir los errores
    document.getElementById('botonContinuar').addEventListener('click', () => {
        corregirErrores(cuento);
    });

    // Función para corregir los errores en el cuento
    function corregirErrores(cuento) {
        for (let errorId in cuento.correcciones) {
            let error = document.getElementById(errorId);
            if (error) {
                error.innerHTML = cuento.correcciones[errorId];
            }
        }
        // Mostrar mensaje de éxito al corregir todos los errores
        document.getElementById('mensajeJuegoCompletado').classList.remove('oculto');
    }

    // Leer en voz alta
    document.getElementById('botonLeer').addEventListener('click', () => {
        let texto = document.getElementById('cuentoTexto').innerText;
        let speech = new SpeechSynthesisUtterance(texto);
        speech.lang = "es-ES";
        speech.rate = 0.9; // Velocidad de lectura
        window.speechSynthesis.speak(speech);
    });
});


