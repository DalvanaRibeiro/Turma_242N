// Variáveis de jogo
let palavraSecreta = '';  // Armazena a palavra que o jogador deve adivinhar.
let letrasCorretas = [];  // Armazena as letras corretas que o jogador adivinhou até o momento.
let letrasErradas = [];   // Armazena as letras erradas que o jogador tentou adivinhar.
let tentativas = 5;       // Número de tentativas restantes para o jogador.
let numeroDeLetras = 0;  // Número de letras da palavra secreta.
  
// Função para iniciar o jogo com a palavra inserida
function iniciarJogo() {
    // Obtém a palavra digitada pelo jogador, remove espaços extras e converte para minúsculas.
    palavraSecreta = document.getElementById('input-palavra').value.trim().toLowerCase(); 
    
    // Verifica se o jogador digitou alguma palavra. Se não, exibe um alerta e interrompe o processo.
    if (!palavraSecreta) {
        alert("Por favor, digite uma palavra!");
        return;
    }

    // Esconde a tela inicial (onde o jogador digita a palavra) e mostra a tela do jogo
    document.getElementById('tela-inicial').style.display = 'none';
    document.getElementById('tela-jogo').style.display = 'block';

    // Inicializa as variáveis do jogo
    letrasCorretas = Array(palavraSecreta.length).fill('_'); // Cria um array de underscores do mesmo tamanho da palavra secreta
    letrasErradas = [];  // Reseta a lista de letras erradas
    tentativas = 5;      // Define o número inicial de tentativas
    numeroDeLetras = palavraSecreta.length;  // Armazena o número de letras da palavra secreta

    // Atualiza a visualização da palavra secreta e o número de tentativas
    atualizarPalavra();
    atualizarErros();
    document.getElementById('mensagem').textContent = '';  // Limpa a mensagem de feedback
    document.getElementById('imagem-acerto').style.display = 'none';  // Esconde a imagem de acerto
    document.getElementById('imagem-erro').style.display = 'none';  // Esconde a imagem de erro
    document.getElementById('tentativas-contagem').textContent = tentativas;  // Exibe o número de tentativas
    document.getElementById('numero-letras').textContent = `Número de letras: ${numeroDeLetras}`;  // Exibe o número de letras da palavra secreta
}

// Função para atualizar a visualização da palavra secreta
function atualizarPalavra() {
    let palavraExibida = ''; // Variável que armazenará a visualização da palavra secreta

    // Loop que percorre cada letra da palavra secreta
    for (let i = 0; i < palavraSecreta.length; i++) {
        // Se a letra ainda não foi adivinhada (representada por '_'), exibe '_'
        if (letrasCorretas[i] === '_') {
            palavraExibida += '_ ';
        } else {
            // Caso contrário, exibe a letra correta que o jogador adivinhou
            palavraExibida += letrasCorretas[i] + ' ';
        }
    }
    
    // Atualiza o HTML com a palavra exibida
    document.getElementById('palavra-secreta').textContent = palavraExibida.trim();
}

// Função para atualizar as tentativas restantes
function atualizarErros() {
    // Atualiza o número de tentativas restantes exibido na tela
    document.getElementById('tentativas-contagem').textContent = tentativas;
}

// Função para verificar se a letra digitada é correta ou errada
function verificarLetra() {
    // Obtém a letra digitada pelo jogador e converte para minúsculas
    const letra = document.getElementById('letra').value.toLowerCase();

    // Verifica se o jogador digitou mais de uma letra ou não digitou nada
    if (!letra || letra.length > 1) {
        alert("Por favor, digite apenas uma letra.");
        return;
    }

    // Verifica se a letra já foi tentada (se foi correta ou errada anteriormente)
    if (letrasErradas.includes(letra) || letrasCorretas.includes(letra)) {
        alert("Você já tentou essa letra.");
        return;
    }

    // Se a letra estiver presente na palavra secreta, é um acerto
    if (palavraSecreta.includes(letra)) {
        // Atualiza o array de letras corretas com a letra adivinhada
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                letrasCorretas[i] = letra;  // Substitui o '_' pela letra correta
            }
        }
        // Exibe mensagem de sucesso, muda a cor para verde e mostra a imagem de acerto
        document.getElementById('mensagem').textContent = `Você acertou a letra: "${letra}"!`;
        document.getElementById('mensagem').style.color = 'green';
        document.getElementById('imagem-acerto').style.display = 'block';
        document.getElementById('imagem-erro').style.display = 'none';
    } else {
        // Se a letra não estiver na palavra, é um erro
        letrasErradas.push(letra);  // Adiciona a letra errada ao array de letras erradas
        tentativas--;  // Diminui uma tentativa restante
        // Exibe mensagem de erro, muda a cor para vermelha e mostra a imagem de erro
        document.getElementById('mensagem').textContent = `Letra errada: "${letra}".`;
        document.getElementById('mensagem').style.color = 'red';
        document.getElementById('imagem-erro').style.display = 'block';
        document.getElementById('imagem-acerto').style.display = 'none';
    }

    // Limpa o campo de texto onde a letra foi digitada
    document.getElementById('letra').value = '';
    
    // Atualiza a visualização da palavra e o número de tentativas restantes
    atualizarPalavra();
    atualizarErros();

    // Verifica se o jogador ganhou (se acertou todas as letras)
    if (letrasCorretas.join('') === palavraSecreta) {
        document.getElementById('mensagem').textContent = `Você ganhou! A palavra era: ${palavraSecreta}`;
        document.getElementById('mensagem').style.color = 'green';  // Mensagem de vitória
    } else if (tentativas <= 0) {
        // Se o jogador perdeu todas as tentativas, exibe a mensagem de derrota
        document.getElementById('mensagem').textContent = `Você perdeu! A palavra era: ${palavraSecreta}`;
        document.getElementById('mensagem').style.color = 'red';  // Mensagem de derrota
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Exibe a tela inicial e esconde a tela do jogo
    document.getElementById('tela-inicial').style.display = 'block';
    document.getElementById('tela-jogo').style.display = 'none';
    // Limpa o campo onde o jogador digitou a palavra secreta
    document.getElementById('input-palavra').value = '';
}
