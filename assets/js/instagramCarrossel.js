const box = document.querySelector(".carrosselInstagram");
const imagens = document.querySelectorAll(".carrosselInstagram img")

let contador = 0;

function slider() {
    contador++;

    if (contador > imagens.length - 1) {
        contador = 0
    }

    box.style.transform = `translateX(${-contador * 31}%)`
}

setInterval( slider , 2000);