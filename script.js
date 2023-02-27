// adiciona um efeito de digitação ao texto
let text = document.querySelectorAll('.container p');
let index = 0;
let speed = 50;

function typeWriter() {
    if (index < text.length) {
        let letters = text[index].textContent.split("");
        text[index].textContent = "";
        letters.forEach(function (letter, i) {
            setTimeout(function () {
                text[index].textContent += letter;
            }, speed * i);
        });
        index++;
        setTimeout(typeWriter, speed * letters.length);
    }
}

// inicia o efeito de digitação
setTimeout(typeWriter, 1000);
