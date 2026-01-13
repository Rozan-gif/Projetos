function atualizarDados() {
             // Atualiza cards
            document.getElementById("vendas-dia").innerText = "Vendas no dia: " + Math.floor(Math.random() * 100);
            document.getElementById("vendas-mes").innerText = "Vendas no mês: " + Math.floor(Math.random() * 1000);
            document.getElementById("clientes-ativos").innerText = "Clientes ativos: " + Math.floor(Math.random() * 50);

            // Atualiza barras
            for (let i = 1; i <= 4; i++) {
                let valor = Math.floor(Math.random() * 200) + 20;
                let barra = document.getElementById("semana" + i);
                barra.style.height = valor + "px";
                barra.innerText = "Semana " + i + "\n" + valor;
            }
        }