const imagens = document.querySelectorAll('.carrossel img');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');
        let indiceAtual = 0;

        function mostrarImagem(indice) {
            imagens.forEach((img, i) => {
                img.classList.toggle('ativo', i === indice);
            });
        }

        botaoAnterior.addEventListener('click', () => {
            indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
            mostrarImagem(indiceAtual);
        });

        botaoProximo.addEventListener('click', () => {
            indiceAtual = (indiceAtual + 1) % imagens.length;
            mostrarImagem(indiceAtual);
        });