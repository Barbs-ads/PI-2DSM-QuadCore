async function carregarDados() {
  try {
    const dados = {
      cartasTotal: 0,
      cartasAdotadas: 0,
      voluntariosTotal: 0,
      voluntariosAtivos: 0,
    };

    const totalCartas = dados.cartasTotal;
    const adotadas = dados.cartasAdotadas;
    const restantes = totalCartas - adotadas;
    const percentualCartas =
      totalCartas > 0 ? Math.round((adotadas / totalCartas) * 100) : 0;

    document.getElementById("cartas-status").innerText =
      `${adotadas} de ${totalCartas}`;
    document.getElementById("cartas-percent").innerText =
      `${percentualCartas}% Concluído`;
    document.getElementById("cartas-restantes").innerText =
      `${restantes} crianças ainda aguardam!`;
    document.getElementById("cartas-restantes-destaque").innerText = restantes;

    const barraCartas = document.querySelector(".barra-dourada");
    if (barraCartas) barraCartas.style.width = percentualCartas + "%";

    document.getElementById("voluntarios-status").innerText =
      `${dados.voluntariosAtivos} de ${dados.voluntariosTotal}`;
    document.getElementById("voluntarios-total").innerText =
      `${dados.voluntariosAtivos} Agentes`;

    const barraVoluntarios = document.querySelector(".barra-vinho");
    if (barraVoluntarios) {
      const percentualVoluntarios =
        dados.voluntariosTotal > 0
          ? Math.round((dados.voluntariosAtivos / dados.voluntariosTotal) * 100)
          : 0;
      barraVoluntarios.style.width = percentualVoluntarios + "%";
    }
  } catch (erro) {
    console.error("Erro ao carregar dados:", erro);
  }
}

carregarDados();

setInterval(carregarDados, 30000);
