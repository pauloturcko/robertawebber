const container = document.querySelector(".linksContainer");
const cards = document.querySelectorAll(".cardLink");

let counter = 0;

function slider() {
  counter++;

  if (
    counter > imagens.length - 1
  )
  counter = 0

  container.style.transform = `translateX(${-counter * 80}%`
}

setInterval(slider , 5000);