// script.js

let tabuleiro = [
    ["", "", ""],  // Linha 1: Células vazias
    ["", "", ""],  // Linha 2: Células vazias
    ["", "", ""]   // Linha 3: Células vazias
];

let vez = "X";  // Começa com o jogador "X"
let jogoAtivo = true;  // O jogo está ativo (true significa que o jogo não terminou)

// Função para renderizar o tabuleiro
function renderizarTabuleiro() {
    const tabuleiroDiv = document.getElementById("tabuleiro");  // Pega o div do tabuleiro
    tabuleiroDiv.innerHTML = "";  // Limpa o tabuleiro antes de renderizar novamente

    // Percorre as linhas e colunas da matriz e cria as células
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const celula = document.createElement("div");  // Cria uma nova div para a célula
            celula.classList.add("celula");  // Adiciona a classe 'celula' para o estilo CSS
            celula.textContent = tabuleiro[i][j];  // Adiciona o valor da célula (X, O ou "")
            
            // Quando a célula é clicada, chama a função fazerJogada()
            celula.onclick = () => fazerJogada(i, j);
            tabuleiroDiv.appendChild(celula);  // Adiciona a célula ao tabuleiro
        }
    }
}

// Função para fazer uma jogada
function fazerJogada(linha, coluna) {
    // Verifica se a célula está vazia e se o jogo ainda está ativo
    if (tabuleiro[linha][coluna] === "" && jogoAtivo) {
        tabuleiro[linha][coluna] = vez;  // Marca a célula com o símbolo do jogador (X ou O)
        verificarVencedor();  // Verifica se algum jogador venceu
        vez = vez === "X" ? "O" : "X";  // Alterna entre X e O
        renderizarTabuleiro();  // Re-renderiza o tabuleiro para atualizar a interface
    }
}

// Função para verificar se algum jogador venceu
function verificarVencedor() {
    // Verifica linhas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== "" && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
            alert(`${tabuleiro[i][0]} venceu!`);  // Exibe uma mensagem com o vencedor
            jogoAtivo = false;  // O jogo termina
            return;
        }
    }

    // Verifica colunas
    for (let j = 0; j < 3; j++) {
        if (tabuleiro[0][j] !== "" && tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j]) {
            alert(`${tabuleiro[0][j]} venceu!`);
            jogoAtivo = false;
            return;
        }
    }

    // Verifica diagonais
    if (tabuleiro[0][0] !== "" && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
        alert(`${tabuleiro[0][0]} venceu!`);
        jogoAtivo = false;
        return;
    }
    if (tabuleiro[0][2] !== "" && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
        alert(`${tabuleiro[0][2]} venceu!`);
        jogoAtivo = false;
        return;
    }

    // Verifica empate (se não houver células vazias e o jogo não acabou)
    let empate = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === "") {
                empate = false;  // Se ainda houver células vazias, não há empate
                break;
            }
        }
    }
    if (empate) {
        alert("Empate!");  // Se todas as células estiverem preenchidas e ninguém venceu
        jogoAtivo = false;
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    tabuleiro = [  // Reinicia a matriz do tabuleiro
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    vez = "X";  // O jogador "X" começa
    jogoAtivo = true;  // O jogo está ativo novamente
    renderizarTabuleiro();  // Re-renderiza o tabuleiro com o estado reiniciado
}

// Renderiza o tabuleiro inicialmente
renderizarTabuleiro();
