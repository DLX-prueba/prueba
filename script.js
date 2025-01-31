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
        document.body.style.fontSize = '1.2em';  // Aumenta el tamaño del texto
    });

    document.getElementById('achicarTexto').addEventListener('click', () => {
        document.body.style.fontSize = '1em';  // Restaura el tamaño normal
    });
});