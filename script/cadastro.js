document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll("#opcoes-cadastro .btn-opcao");
  const formularios = document.querySelectorAll(".form-cadastro");

  document.getElementById("cadastro-site").classList.add("active");
  document.getElementById("cadastro-site").classList.remove("hidden");

  botoes.forEach((botao) => {
    botao.addEventListener("click", function () {
      const formId = this.getAttribute("data-form");
      botoes.forEach((b) => b.classList.remove("active"));
      formularios.forEach((f) => {
        f.classList.remove("active");
        f.classList.add("hidden");
      });

      this.classList.add("active");
      const formAtivo = document.getElementById(formId);
      if (formAtivo) {
        formAtivo.classList.add("active");
        formAtivo.classList.remove("hidden");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("cep-site").addEventListener("blur", function () {

    let cep = this.value.replace(/\D/g, "");

    if (cep.length === 8) {

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(dados => {

          if (!dados.erro) {
            document.getElementById("logradouro-site").value = dados.logradouro;
            document.getElementById("bairro-site").value = dados.bairro;
            document.getElementById("cidade-site").value = dados.localidade;
            document.getElementById("estado-site").value = dados.uf;
          }

        });

    }

  });

});

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("cep-instituicao").addEventListener("blur", function () {

    let cep = this.value.replace(/\D/g, "");

    if (cep.length === 8) {

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(dados => {

          if (!dados.erro) {
            document.getElementById("logradouro-instituicao").value = dados.logradouro;
            document.getElementById("bairro-instituicao").value = dados.bairro;
            document.getElementById("cidade-instituicao").value = dados.localidade;
            document.getElementById("estado-instituicao").value = dados.uf;
          }

        });

    }

  });

});

// CADASTRO DOADOR
document.getElementById("cadastro-site").addEventListener("submit", async (e) => {
  e.preventDefault();

  const senha = document.getElementById("senha-site").value;
  const confirmar = document.getElementById("confirmar-senha-site").value;

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  const usuario = {
    nome: document.getElementById("nome-site").value,
    email: document.getElementById("email-site").value,
    senha: senha,
    tipo: "doador"
  };

//ESSA PARTE SERA DESCOMENTADA APÓS BACKEND FUNCIONANDO


  // const resposta = await fetch("http://localhost:3000/cadastro", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(usuario)
  // });

  // const dados = await resposta.json();

  // if (dados.sucesso) {
  //   alert("Cadastro realizado com sucesso!");
  //   window.location.href = "login.html";
  // } else {
  //   alert("Erro ao cadastrar");
  // }



//ESSA PARTE DEIXA DE EXISTIR APÓS BACKEND FUNCIONANDO

  alert("Cadastro de doador em desenvolvimento");

});


// CADASTRO INSTITUIÇÃO
document.getElementById("instituicao").addEventListener("submit", async (e) => {
  e.preventDefault();

  const usuario = {
    nome: document.getElementById("nome-instituicao").value,
    email: document.getElementById("email-institucional").value,
    senha: "123", // depois você melhora isso
    tipo: "instituicao"
  };



//ESSA PARTE SERA DESCOMENTADA APÓS BACKEND FUNCIONANDO

  // const resposta = await fetch("http://localhost:3000/cadastro", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(usuario)
  // });

  // const dados = await resposta.json();

  // if (dados.sucesso) {
  //   alert("Instituição cadastrada!");
  //   window.location.href = "login.html";
  // } else {
  //   alert("Erro ao cadastrar instituição");
  // }



//ESSA PARTE DEIXA DE EXISTIR APÓS BACKEND FUNCIONANDO

  alert("Cadastro de instituição em desenvolvimento");
});


