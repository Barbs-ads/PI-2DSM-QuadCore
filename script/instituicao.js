const cartinhasInstituicao = [
  {nome:"Ana", idade:6, status:"adotada", presente:"Boneca"},
  {nome:"Lucas", idade:8, status:"disponivel", presente:"Carrinho"},
  {nome:"Maria", idade:7, status:"entregue", presente:"Lápis de cor"}
];

function renderizarInstituicao() {
  const container = document.querySelector(".cartinhas-instituicao");
  container.innerHTML = "";

  cartinhasInstituicao.forEach(carta => {
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

renderizarInstituicao();