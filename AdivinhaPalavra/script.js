// Lista de palavras para o jogo
const palavras = ["tv-globinho"]; // A lista de palavras que o jogo pode escolher aleatoriamente
let palavraSecreta = ''; // Variável para armazenar a palavra secreta
let letrasCorretas = []; // Array para armazenar as letras corretas que o jogador adivinha
let letrasErradas = []; // Array para armazenar as letras erradas que o jogador tenta
let tentativas = 5; // O número de tentativas iniciais do jogador
let numeroDeLetras = 0; // Variável para armazenar o número de letras na palavra secreta

// Função para escolher uma palavra aleatória da lista
function escolherPalavra() {
    const indice = Math.floor(Math.random() * palavras.length); // Escolhe um índice aleatório da lista de palavras
    //  Math.floor(): Essa função arredonda o número para baixo, transformando o valor decimal em um número inteiro. Por exemplo, se o valor obtido for 4.89, Math.floor() vai arredondá-lo para 4.
    palavraSecreta = palavras[indice]; // A palavra secreta é escolhida

    // Contando o número de letras na palavra secreta, ignorando os espaços
    numeroDeLetras = palavraSecreta.replace(/ /g, '').length; // Conta apenas as letras, sem considerar os espaços
     // replace(/ /g, ''): A função replace() é usada para substituir partes da string.

    // Substitui os espaços da palavra secreta por hífens para visualização
    let palavraComHifen = palavraSecreta.replace(/ /g, '-'); // Troca espaços por hífens

    letrasCorretas = Array(palavraComHifen.length).fill('_');  // Inicializa o array de letras corretas com '_'
    // O método fill() em JavaScript é usado para preencher todos os elementos de um array com um valor fixo, a partir de um índice inicial até um índice final.
    letrasErradas = []; // Reinicia o array de letras erradas
    tentativas = 5; // Reinicia as tentativas para 5
    atualizarPalavra(); // Atualiza a visualização da palavra secreta
    atualizarErros(); // Atualiza a visualização do número de tentativas restantes
    document.getElementById('mensagem').textContent = ''; // Limpa qualquer mensagem da tela
    document.getElementById('imagem-acerto').style.display = 'none'; // Esconde a imagem de acerto
    document.getElementById('imagem-erro').style.display = 'none'; // Esconde a imagem de erro
    document.getElementById('tentativas-contagem').textContent = tentativas; // Exibe o número de tentativas restantes

    // Atualiza o número de letras no jogo
    document.getElementById('numero-letras').textContent = `Número de letras: ${numeroDeLetras}`;
}

// Função para atualizar a visualização da palavra secreta
function atualizarPalavra() {
    let palavraExibida = ''; // Inicializa uma variável para a palavra exibida

    // Itera sobre a palavra secreta e revela as letras corretas, deixando espaços ou hífens
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (letrasCorretas[i] === '_') {
            if (palavraSecreta[i] === ' ') {
                palavraExibida += ' '; // Se for um espaço, mantém o espaço visível
            } else if (palavraSecreta[i] === '-') {
                palavraExibida += '-'; // Se for um hífen, mantém o hífen visível
            } else {
                palavraExibida += '_'; // Senão, mantém um traço indicando uma letra não adivinhada
            }
        } else {
            palavraExibida += letrasCorretas[i]; // Caso a letra já tenha sido adivinhada, exibe a letra
        }

        // Adiciona um espaço após cada letra ou traço para separar visualmente
        palavraExibida += ' ';
    }
    // Atualiza o elemento HTML com a palavra visível
    document.getElementById('palavra-secreta').textContent = palavraExibida.trim(); // Remove o último espaço extra
}

// Função para atualizar a contagem de tentativas restantes
function atualizarErros() {
    document.getElementById('tentativas-contagem').textContent = tentativas; // Atualiza a contagem de tentativas
}

// Função para verificar se a letra digitada é correta ou errada
function verificarLetra() {
    const letra = document.getElementById('letra').value.toLowerCase(); // Obtém a letra digitada e converte para minúscula

    // Verifica se a letra não foi tentada antes e se não é uma letra vazia
    if (letra && !letrasErradas.includes(letra) && !letrasCorretas.includes(letra)) {
        // Se a letra estiver na palavra secreta
        if (palavraSecreta.includes(letra)) {
            for (let i = 0; i < palavraSecreta.length; i++) {
                // Substitui os "_" pelas letras corretas na posição correspondente
                if (palavraSecreta[i] === letra) {
                    letrasCorretas[i] = letra;
                }
            }
            document.getElementById('mensagem').textContent = `Você acertou a letra: "${letra}"!`; // Exibe a mensagem de acerto
            document.getElementById('mensagem').style.color = 'green'; // A mensagem fica verde
            document.getElementById('imagem-acerto').style.display = 'block'; // Exibe a imagem de acerto
            document.getElementById('imagem-erro').style.display = 'none'; // Esconde a imagem de erro
        } else {
            letrasErradas.push(letra); // Adiciona a letra errada ao array
            tentativas--; // Diminui as tentativas
            document.getElementById('mensagem').textContent = `Letra errada: "${letra}".`; // Exibe a mensagem de erro
            document.getElementById('mensagem').style.color = 'red'; // A mensagem fica vermelha
            document.getElementById('imagem-erro').style.display = 'block'; // Exibe a imagem de erro
            document.getElementById('imagem-acerto').style.display = 'none'; // Esconde a imagem de acerto
        }

        document.getElementById('letra').value = ''; // Limpa a caixa de entrada após o chute
        atualizarPalavra(); // Atualiza a visualização da palavra secreta
        atualizarErros(); // Atualiza o número de tentativas restantes

        // Verifica se o jogador adivinhou a palavra completamente
        if (letrasCorretas.join('') === palavraSecreta.replace(/ /g, '-')) {
            document.getElementById('mensagem').textContent = `Você ganhou! A palavra era: ${palavraSecreta}`; // Exibe a mensagem de vitória
            document.getElementById('mensagem').style.color = 'green'; // A mensagem fica verde
        } else if (tentativas <= 0) {
            document.getElementById('mensagem').textContent = `Você perdeu! A palavra era: ${palavraSecreta}`; // Exibe a mensagem de derrota
            document.getElementById('mensagem').style.color = 'red'; // A mensagem fica vermelha
        }
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    escolherPalavra(); // Escolhe uma nova palavra
    document.getElementById('mensagem').textContent = ''; // Limpa qualquer mensagem existente
}

// Inicia o jogo chamando a função escolherPalavra
escolherPalavra();
