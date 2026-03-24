const cartinhasDoador = [
  {nome:"Ana", idade:6, status:"reservada", presente:"Boneca"},
  {nome:"Lucas", idade:8, status:"enviada", presente:"Carrinho"},
  {nome:"Maria", idade:7, status:"entregue", presente:"Lápis de cor"}
];

function renderizarDoador() {
  const container = document.querySelector(".cartinhas-doador");
  container.innerHTML = "";

  cartinhasDoador.forEach(carta => {
    const card = document.createElement("div");
    card.className = "card-carta";
    card.innerHTML = `
      <h2>${carta.nome}, ${carta.idade} anos</h2>
      <div class="status ${carta.status}">${carta.status.toUpperCase()}</div>
      <p>Presente: ${carta.presente}</p>
      <button class="botao1">Detalhes</button>
    `;
    container.appendChild(card);
  });
}

renderizarDoador();