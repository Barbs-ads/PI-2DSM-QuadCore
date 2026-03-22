let slideAtual = 0;
const cardsVisiveis = 1; 
const wrapper = document.getElementById("historiasWrapper");
const totalCards = wrapper.children.length;
const totalSlides = totalCards - cardsVisiveis + 1;

function mudarSlide(direcao) {
  slideAtual += direcao;

  if (slideAtual < 0) slideAtual = totalSlides - 1;
  if (slideAtual >= totalSlides) slideAtual = 0;

  atualizarCarrossel();
}

function irParaSlide(indice) {
  slideAtual = indice;
  atualizarCarrossel();
}

function atualizarCarrossel() {
  const shiftPercent = 100 / cardsVisiveis;
  wrapper.style.transform = `translateX(-${slideAtual * shiftPercent}%)`;

  const indicadores = document.querySelectorAll(".indicador");
  indicadores.forEach((ind, index) => {
    ind.classList.remove("ativo");
    if (index === slideAtual) ind.classList.add("ativo");
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") mudarSlide(-1);
  if (e.key === "ArrowRight") mudarSlide(1);
});

atualizarCarrossel();
