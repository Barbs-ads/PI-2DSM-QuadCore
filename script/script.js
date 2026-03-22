
function carregarImpacto() {
//   USAR ESSA ETAPA DEPOIS QUE INTEGRAR O SISTEMA AO BANCO DE DADOS
//   fetch("http://localhost:3000/api/impacto")  ---- APENAS UM EXEMPLO
//   .then(res => res.json())
//   .then(dados => {

//     document.getElementById("num-criancas").textContent = dados.criancas;
//     document.getElementById("num-presentes").textContent = dados.presentes;
//     document.getElementById("num-doadores").textContent = dados.doadores;

//   });

// DADOS APENAS PARA SIMULAÇÃO, APAGAR DEPOIS QUE INTEGRAR COM BANCO DE DADOS DESDE CONST DADOS ATÉ DOADORES: 0 };
  const dados = {
    criancas: 0,
    presentes: 0,
    doadores: 0
  };


  document.getElementById("num-criancas").textContent = dados.criancas;
  document.getElementById("num-presentes").textContent = dados.presentes;
  document.getElementById("num-doadores").textContent = dados.doadores;

}

carregarImpacto();
