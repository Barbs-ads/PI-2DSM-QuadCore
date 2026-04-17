
document.getElementById("formLogin").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.toLowerCase();
  const senha = document.getElementById("senha").value;
  
  // Troque 'false' para 'true' quando subir o servidor Node.js - LEMBRAR DE MUDAR AQUI PARA FUNCIONAR COM NODE.JS E POSTGRESQL
  const usarApiReal = false; 

  if (usarApiReal) {
    /* ESTRUTURA PARA POSTGRESQL + NODE.JS (RNF002 e RNF003)
       Aqui o backend fará a criptografia e identificação do perfil 
    */
    try {
      const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      const dados = await resposta.json();

      if (dados.sucesso) {
        localStorage.setItem("usuario", JSON.stringify(dados.usuario));
        direcionarUsuario(dados.usuario.tipo);
      } else {
        alert("Erro no login: " + dados.mensagem);
      }
    } catch (erro) {
      console.error("Erro ao conectar com a API:", erro);
    }
  } else {
    /* MODO DE TESTE (IDENTIFICAÇÃO AUTOMÁTICA)
       Simula o requisito de usabilidade intuitiva (RNF004) [cite: 30]
    */
    let tipoIdentificado = "doador";

    if (email.includes("admin")) {
      tipoIdentificado = "admin";
    } else if (email.includes("ong") || email.includes("pastoral")) {
      tipoIdentificado = "instituicao";
    }

    const usuarioSimulado = {
      nome: email.split("@")[0],
      email: email,
      tipo: tipoIdentificado
    };

    localStorage.setItem("usuario", JSON.stringify(usuarioSimulado));
    direcionarUsuario(tipoIdentificado);
  }
});

function direcionarUsuario(tipo) {
  const rotas = {
    "doador": "doador.html",
    "instituicao": "instituicao.html",
    "admin": "admin.html"
  };
  
  window.location.href = rotas[tipo] || "index.html";
}