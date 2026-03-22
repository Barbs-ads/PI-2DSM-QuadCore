function adotar() {
  alert("Obrigado por adotar essa cartinha! 🎁🎅🎄");
}

function adotado() {
  alert("Esta cartinha já foi adotada por outro doador 🎁🎅🎄");
}
function escolher() {
  alert("Presente Escolhido!! Leve-o ao ponto de coleta indicado 🎁🎅🎄");
}

document.addEventListener("DOMContentLoaded", function(){

  const form = document.getElementById("form-carta");
  const presente = document.getElementById("presente");
  const outro = document.getElementById("outro-presente");

  form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome-crianca").value.trim();
  const nascimento = document.getElementById("data-nascimento").value;
  const presenteSelecionado = presente.value;
  const texto = document.getElementById("texto-carta").value.trim();
  const foto = document.getElementById("foto-carta").files[0];

  // Verifica se pelo menos um dos dois (texto ou foto) foi fornecido
  if (!texto && !foto) {
    alert("Por favor, escreva a cartinha ou envie a foto da cartinha.");
    return;
  }

  // Aqui você pode enviar os dados para o backend
  console.log(nome, nascimento, presenteSelecionado, texto, foto);

  alert("Cartinha enviada com sucesso!");
});



  presente.addEventListener("change", function(){

  if(this.value === "outro"){
    outro.style.display = "block";
    document.getElementById("presente-outro").required = true;
  }else{
    outro.style.display = "none";
    document.getElementById("presente-outro").required = false;
  }

});

});






// Array de teste para simular cartas
    const cartinhasTeste = [
      { nome: "Teste1", idade: 7, status: "Aguardando", texto: "Esta é uma cartinha de teste para ver como vai aparecer.", presente: "Boneca" },
      { nome: "Teste2", idade: 5, status: "Aguardando", texto: "Outra cartinha de teste para ver o layout das cartas.", presente: "Carrinho" },
      { nome: "Teste3", idade: 8, status: "Aguardando", texto: "Mais uma cartinha de teste.", presente: "Lápis de cor" }
    ];

    function renderizarCartinhas(cartinhas) {
      const container = document.querySelector("#parte2 .container-icones");
      container.innerHTML = ""; // Limpa antes de renderizar

      cartinhas.forEach(carta => {
        const figure = document.createElement("figure");
        figure.className = "container-icones-qdp";

        figure.innerHTML = `
          <i class="bi bi-gift-fill"></i>
          <figcaption class="texto-explicativo">
            <h2>${carta.nome}, ${carta.idade} anos</h2>
            <div class="${carta.status === 'Disponível' ? 'di' : carta.status === 'Adotada' ? 'in' : 'ag'}">
              ${carta.status}
            </div>
            "${carta.texto}"
            <div class="presente">
              <i class="bi bi-gift"></i> Pedido: ${carta.presente}
            </div>
            <button type="submit" class="${carta.status === 'Disponível' ? 'botao1' : 'botao2'}">
              ${carta.status === 'Disponível' ? 'Quero Adotar' : 'Aguardando'}
            </button>
          </figcaption>
        `;
        container.appendChild(figure);
      });
    }

    // Renderiza cartas de teste inicialmente
    renderizarCartinhas(cartinhasTeste);

    // Formulário de envio
    const form = document.getElementById("form-carta");
    form.addEventListener("submit", function(e){
      e.preventDefault();

      const nome = document.getElementById("nome-crianca").value.trim();
      const nascimento = new Date(document.getElementById("data-nascimento").value);
      const idade = new Date().getFullYear() - nascimento.getFullYear();
      const presente = document.getElementById("presente").value;
      const texto = document.getElementById("texto-carta").value.trim();
      const foto = document.getElementById("foto-carta").files[0];

      if (!texto && !foto) {
        alert("Por favor, escreva a cartinha ou envie a foto da cartinha.");
        return;
      }

      // Adiciona nova carta no array com status "Aguardando"
      cartinhasTeste.push({ nome, idade, status: "Aguardando", texto: texto || "Carta enviada como foto", presente });

      // Re-renderiza
      renderizarCartinhas(cartinhasTeste);

      alert("Cartinha enviada! Ela ficará aguardando análise antes de aparecer como disponível.");
      form.reset();
    });