/* ==========================================================
   Lição de JavaScript
   Cada bloco abaixo corresponde a uma seção da página.
   O arquivo é carregado com "defer", então o HTML já existe
   quando este código roda.
   ========================================================== */

/* ---------- 2. Manipulando elementos: trocar texto ---------- */
const mensagem = document.getElementById('mensagem');
const textoOriginal = mensagem.textContent;

document.getElementById('btn-trocar').addEventListener('click', function () {
  mensagem.textContent = 'O JavaScript trocou este texto!';
});

document.getElementById('btn-restaurar').addEventListener('click', function () {
  mensagem.textContent = textoOriginal;
});


/* ---------- 3. Evento click: contador ---------- */
let contagem = 0;
const contador = document.getElementById('contador');

function atualizarContador() {
  contador.textContent = contagem;
}

document.getElementById('btn-mais').addEventListener('click', function () {
  contagem++;
  atualizarContador();
});

document.getElementById('btn-menos').addEventListener('click', function () {
  contagem--;
  atualizarContador();
});

document.getElementById('btn-zerar').addEventListener('click', function () {
  contagem = 0;
  atualizarContador();
});


/* ---------- 4. Alterando cor e estilo ---------- */
const caixaCor = document.getElementById('caixa-cor');
const btnDestaque = document.getElementById('btn-destaque');

// Todos os botões com data-cor fazem a mesma coisa, mudando só a cor
document.querySelectorAll('[data-cor]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    caixaCor.style.backgroundColor = botao.dataset.cor;
    caixaCor.style.color = '#ffffff';
  });
});

// classList.toggle liga/desliga a classe e devolve true ou false
btnDestaque.addEventListener('click', function () {
  const ativo = caixaCor.classList.toggle('caixa-cor--destaque');
  btnDestaque.setAttribute('aria-pressed', ativo);
});

// Limpar: remove o estilo inline e a classe de destaque
document.getElementById('btn-limpar').addEventListener('click', function () {
  caixaCor.style.backgroundColor = '';
  caixaCor.style.color = '';
  caixaCor.classList.remove('caixa-cor--destaque');
  btnDestaque.setAttribute('aria-pressed', 'false');
});


/* ---------- 5. Outros eventos ---------- */
const hoverCard = document.getElementById('hover-card');
const textoHoverPadrao = hoverCard.textContent;

function ativarCard() {
  hoverCard.textContent = 'Você está aqui!';
  hoverCard.classList.add('hover-card--ativo');
}

function desativarCard() {
  hoverCard.textContent = textoHoverPadrao;
  hoverCard.classList.remove('hover-card--ativo');
}

// O mesmo efeito para mouse e teclado (Tab), para ficar acessível
hoverCard.addEventListener('mouseover', ativarCard);
hoverCard.addEventListener('mouseout', desativarCard);
hoverCard.addEventListener('focus', ativarCard);
hoverCard.addEventListener('blur', desativarCard);

// O evento "input" dispara a cada letra digitada
const campoNome = document.getElementById('campo-nome');
const nomeSaida = document.getElementById('nome-saida');

campoNome.addEventListener('input', function () {
  nomeSaida.textContent = campoNome.value.trim() || 'visitante';
});


/* ---------- 6. Projeto: cartão de perfil interativo ---------- */
const perfil = document.getElementById('perfil');
const perfilSobre = document.getElementById('perfil-sobre');
const avatar = document.getElementById('perfil-avatar');
const btnSobre = document.getElementById('btn-sobre');
const btnTema = document.getElementById('btn-tema');

// Curtir: incrementa o contador de curtidas
let curtidas = 0;
const spanCurtidas = document.getElementById('curtidas');

document.getElementById('btn-curtir').addEventListener('click', function () {
  curtidas++;
  spanCurtidas.textContent = curtidas;
});

// Mostrar/ocultar o texto "sobre mim" com o atributo hidden
btnSobre.addEventListener('click', function () {
  perfilSobre.hidden = !perfilSobre.hidden;

  const aberto = !perfilSobre.hidden;
  btnSobre.setAttribute('aria-expanded', aberto);
  btnSobre.textContent = aberto ? 'Ocultar sobre mim' : 'Mostrar sobre mim';
});

// Tema escuro: alterna uma classe do CSS
btnTema.addEventListener('click', function () {
  const escuro = perfil.classList.toggle('perfil--escuro');
  btnTema.setAttribute('aria-pressed', escuro);
  btnTema.textContent = escuro ? 'Tema claro' : 'Tema escuro';
});

// Cor do avatar: sorteia um tom (0 a 359) no modelo de cor HSL
document.getElementById('btn-avatar').addEventListener('click', function () {
  const tom = Math.floor(Math.random() * 360);
  avatar.style.backgroundColor = 'hsl(' + tom + ', 60%, 40%)';
});