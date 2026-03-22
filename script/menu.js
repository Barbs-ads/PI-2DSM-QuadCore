const usuario = JSON.parse(localStorage.getItem("usuario"));
const menu = document.getElementById("menu-usuario");

if (usuario) {
  menu.innerHTML = `
    <a href="#" id="minhaConta">Minha Conta</a>
    <br>
    <a href="#" id="logout">Sair</a>
  `;

  document.getElementById("minhaConta").addEventListener("click", () => {
    if (usuario.tipo === "doador") {
      window.location.href = "area-doador.html";
    } else {
      window.location.href = "area-instituicao.html";
    }
  });

  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("usuario");
    window.location.href = "index.html";
  });

} else {
  menu.innerHTML = `
    <a href="login.html">Login</a>
  `;
}