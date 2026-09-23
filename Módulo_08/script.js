// ========================================
// SELEÇÃO DE ELEMENTOS DO DOM
// ========================================

const temaBtn = document.getElementById("temaBtn");
const contador = document.getElementById("contador");

const filtros = document.querySelectorAll(".filtro");
const produtos = document.querySelectorAll(".produto");

const botoesAdicionar =
    document.querySelectorAll(".adicionar");

const mensagemBtn =
    document.getElementById("mensagemBtn");

const mensagem =
    document.getElementById("mensagem");

const formulario =
    document.getElementById("formulario");

const resposta =
    document.getElementById("resposta");


// ========================================
// CONTADOR DO CARRINHO
// ========================================

let quantidade = 0;


// ========================================
// EVENTO DOS BOTÕES DE ADICIONAR
// ========================================

botoesAdicionar.forEach(function(botao) {

    botao.addEventListener("click", function() {

        quantidade++;

        contador.textContent = quantidade;

        botao.textContent = "✓";

        setTimeout(function() {
            botao.textContent = "+";
        }, 800);

    });

});


// ========================================
// FILTRO DO CARDÁPIO
// ========================================

filtros.forEach(function(filtro) {

    filtro.addEventListener("click", function() {

        // Remove a classe ativo dos outros botões
        filtros.forEach(function(item) {
            item.classList.remove("ativo");
        });

        // Ativa o botão clicado
        filtro.classList.add("ativo");

        // Pega a categoria escolhida
        const categoria =
            filtro.getAttribute("data-categoria");


        // Percorre todos os produtos
        produtos.forEach(function(produto) {

            const categoriaProduto =
                produto.getAttribute("data-categoria");


            // Mostra todos
            if (categoria === "todos") {

                produto.style.display = "block";

            }

            // Mostra somente a categoria escolhida
            else if (categoria === categoriaProduto) {

                produto.style.display = "block";

            }

            // Esconde os outros
            else {

                produto.style.display = "none";

            }

        });

    });

});


// ========================================
// MODO ESCURO
// ========================================

temaBtn.addEventListener("click", function() {

    document.body.classList.toggle("escuro");


    if (document.body.classList.contains("escuro")) {

        temaBtn.textContent = "☀️";

    } else {

        temaBtn.textContent = "🌙";

    }

});


// ========================================
// BOT