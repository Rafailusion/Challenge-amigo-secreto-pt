let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        nomeInput.value = "";
        renderizarLista();
        falar("Amigo adicionado.");
    } else {
        falar("Por favor, insira um nome válido.");
    }
}

function renderizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigos() {
    if (amigos.length < 2) {
        falar("É necessário ao menos dois amigos para realizar o sorteio.");
        return;
    }

    // Criar uma cópia do array de amigos
    const amigosSorteio = [...amigos];
    const resultados = [];

    // Embaralha o array de amigos para garantir que o sorteio seja aleatório
    const sorteados = amigosSorteio.sort(() => Math.random() - 0.5);

    // Faz com que ninguém tire a si mesmo
    for (let i = 0; i < sorteados.length; i++) {
        const amigoSorteado = sorteados[i];
        const amigoTirado = sorteados[(i + 1) % sorteados.length]; // Garantindo que cada pessoa tire alguém diferente

        resultados.push(`${amigoSorteado} vai tirar ${amigoTirado}`);
    }

    exibirResultado(resultados);
    falar("Sorteio realizado com sucesso!");
}

function exibirResultado(resultados) {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = "";

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultadoList.appendChild(li);
    });
}

// Função de síntese de voz
function falar(texto) {
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    speechSynthesis.speak(utterance);
}

// Adicionando suporte para responsividade
window.addEventListener("resize", ajustarLayout);

function ajustarLayout() {
    const larguraTela = window.innerWidth;
    const body = document.body;

    if (larguraTela < 600) {
        body.classList.add("mobile-view");
    } else {
        body.classList.remove("mobile-view");
    }
}

ajustarLayout();
