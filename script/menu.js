
//SERÁ REATIVADO (DESCOMENTADO) APÓS BACKEND EM FUNCIONAMENTO E A PARTE DE BAIXO APAGADA 

// const usuario = JSON.parse(localStorage.getItem("usuario"));
// const menu = document.getElementById("menu-usuario");

// if (usuario) {
//   menu.innerHTML = `
//     <a href="#" id="minhaConta">Minha Conta</a>
//     <br>
//     <a href="#" id="logout">Sair</a>
//   `;

//   document.getElementById("minhaConta").addEventListener("click", () => {
//     if (usuario.tipo === "doador") {
//       window.location.href = "area-doador.html";
//     } else {
//       window.location.href = "area-instituicao.html";
//     }
//   });

//   document.getElementById("logout").addEventListener("click", () => {
//     localStorage.removeItem("usuario");
//     window.location.href = "index.html";
//   });

// } else {
//   menu.innerHTML = `
//     <a href="login.html">Login</a>
//   `;
// }






//VERSÃO APENAS PARA TESTE SERÁ APAGADO APÓS BACKEND PRONTO
// menu.js
const menu = document.getElementById("menu-usuario");
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
  // Usuário logado
  menu.innerHTML = `
    <a href="#" id="minhaConta">Minha Conta</a>
    <br>
    <a href="#" id="logout">Sair</a>
  `;

  document.getElementById("minhaConta").addEventListener("click", () => {
    if (usuario.tipo === "doador") {
      window.location.href = "doador.html";
    } else {
      window.location.href = "instituicao.html";
    }
  });

  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("usuario");
    // Apenas recarrega a página inicial sem redirecionar direto ao login
    window.location.href = "index.html";
  });

} else {
  // Usuário não logado
  menu.innerHTML = `<a href="login.html">Login</a>`;
}