// LOGIN
document.getElementById("formLogin").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const tipo = document.getElementById("tipo").value;

  const resposta = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, senha, tipo })
  });

  const dados = await resposta.json();

  if (dados.sucesso) {
    localStorage.setItem("usuario", JSON.stringify(dados.usuario));

    if (tipo === "doador") {
      window.location.href = "area-doador.html";
    } else {
      window.location.href = "area-instituicao.html";
    }
  } else {
    alert("Login inválido");
  }
});

// CADASTRO
document.getElementById("formCadastro").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nomeCadastro").value;
  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;
  const tipo = document.getElementById("tipoCadastro").value;

  await fetch("http://localhost:3000/cadastro", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ nome, email, senha, tipo })
  });

  alert("Cadastro realizado!");
});