const form = document.getElementById("contato");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome === "" || email === "") {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.style.color = "red";
  } else if (!email.includes("@")) {
    mensagem.textContent = "Digite um email válido.";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Horário agendado com sucesso! Nosso time ira entrar em contato com você em breve.";
    mensagem.style.color = "green";
  
  }
});