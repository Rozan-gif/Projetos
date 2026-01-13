const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

form.addEventListener("submit" , e => {
    e.preventDefault();
    if (nome.value === "" || email.value === "") {
        msg.textContent = "Preencha todos os campos !";
        msg.style.color = "red";
    } else {
        msg.textContent = "Formulário enviado com sucesso !";
        msg.style.color = "green";
    }
    
    });