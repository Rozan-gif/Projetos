// Array de perguntas
const questions = [
    {
        question: "Qual elemento HTML é usado para criar um link?",
        options: ["<a>", "<href>", "<link>", "<url>"],
        correct: "<a>"
    },
    {
        question: "Qual propriedade CSS altera a cor do texto?",
        options: ["color", "background-color", "font-color", "text-color"],
        correct: "text-color"
    },
    {
        question: "Qual método JavaScript seleciona um elemento pelo ID?",
        options: ["getElementById", "querySelectorAll", "getElementsByTagName", "selectById"],
        correct: "getElementById"
    },
    {
        question: "Qual atributo HTML aplica estilos diretamente em um elemento?",
        options: ["style", "class", "id", "css"],
        correct: "style"
    },
    {
        question: "Qual evento JavaScript é disparado ao clicar em um elemento?",
        options: ["onclick", "onchange", "onmouseover", "onload"],
        correct: "onclick"
    }
];

let score = 0;
let currentQuestion = 0;

// Mostra a pergunta atual
function showQuestion() {
    const quizSection = document.getElementById("quiz");
    quizSection.innerHTML = ""; // limpa conteúdo anterior

    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];

        // container da pergunta
        const div = document.createElement("div");
        div.classList.add("question");

        // texto da pergunta
        const p = document.createElement("p");
        p.textContent = q.question;
        div.appendChild(p);

        // opções
        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.classList.add("answer");
            btn.textContent = option;
            btn.onclick = () => checkAnswer(option, q.correct);
            div.appendChild(btn);
        });

        quizSection.appendChild(div);
    } else {
        showFinalMessage();
    }
}

// Verifica resposta
function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    currentQuestion++;
    showQuestion();
}

// Mensagem final
function showFinalMessage() {
    const resultDiv = document.getElementById("result");
    let message = "";

    if (score <= 2) {
        message = "Você precisa revisar mais!";
        resultDiv.className = "low";
    } else if (score <= 4) {
        message = "Bom! Está no caminho.";
        resultDiv.className = "medium";
    } else {
        message = "Excelente! Você está voando!";
        resultDiv.className = "correct";
    }

    resultDiv.textContent = `Você acertou ${score} de ${questions.length}. ${message}`;
}

// inicia o quiz
window.onload = showQuestion;