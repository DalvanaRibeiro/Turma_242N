// Dados dos filmes com imagens armazenadas localmente na pasta 'imagens'
const filmes = {
    acao: [
        {
            titulo: "Mad Max: Estrada da Fúria",
            diretor: "George Miller",
            elenco: "Tom Hardy, Charlize Theron, Nicholas Hoult",
            sinopse: "Em um futuro pós-apocalíptico, Max se junta a Furiosa em uma missão para escapar de um tirano que controla o deserto.",
            imagem: "imagens/madmax6.jpg"  // Caminho relativo para a imagem
        },
        {
            titulo: "John Wick",
            diretor: "Chad Stahelski",
            elenco: "Keanu Reeves, Willem Dafoe, Alfie Allen",
            sinopse: "John Wick, um ex-assassino, busca vingança contra criminosos que destruíram sua vida.",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/1/13/John_wick_ver3.jpg"  // Caminho relativo para a imagem
        },
        {
            titulo: "Vingadores: Ultimato",
            diretor: "Anthony Russo, Joe Russo",
            elenco: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
            sinopse: "Os heróis tentam reverter os danos causados por Thanos, enfrentando um grande desafio para salvar o universo.",
            imagem: "https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1494926-800-800/876985_2.jpg?v=638042174051830000"  // Caminho relativo para a imagem
        },
        {
            titulo: "Gladiador",
            diretor: "Ridley Scott",
            elenco: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
            sinopse: "Maximus, um general romano, se torna gladiador para buscar vingança contra o imperador que matou sua família.",
            imagem: "imagens/gladiador.jpg"  // Caminho relativo para a imagem
        }
    ],
    romance: [
        {
            titulo: "Diário de uma Paixão",
            diretor: "Nick Cassavetes",
            elenco: "Ryan Gosling, Rachel McAdams, James Garner",
            sinopse: "O amor entre Noah e Allie, que resiste ao tempo e ao destino.",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7JXj_QBP8Ebe953IEX0UMq-YDvOK2eL_RA&s"  // Caminho relativo para a imagem
        },
        {
            titulo: "Como Eu Era Antes de Você",
            diretor: "Thea Sharrock",
            elenco: "Emilia Clarke, Sam Claflin, Janet McTeer",
            sinopse: "Uma jovem mulher começa a cuidar de um homem paralisado e eles transformam a vida um do outro.",
            imagem: "imagens/comoeuera.jpg"  // Caminho relativo para a imagem
        },
        {
            titulo: "O Casamento do Meu Melhor Amigo",
            diretor: "P.J. Hogan",
            elenco: "Julia Roberts, Dermot Mulroney, Rupert Everett",
            sinopse: "Uma mulher tenta sabotar o casamento do seu melhor amigo quando percebe que está apaixonada por ele.",
            imagem: "imagens/ocasamento.jpg"  // Caminho relativo para a imagem
        },
        {
            titulo: "P.S. Eu Te Amo",
            diretor: "Richard LaGravenese",
            elenco: "Hilary Swank, Gerard Butler, Lisa Kudrow",
            sinopse: "Após a morte do marido, uma mulher recebe cartas dele para ajudá-la a seguir em frente com a vida.",
            imagem: "imagens/pseuteamo.jpg"  // Caminho relativo para a imagem
        }
    ],
    terror: [
        {
            titulo: "O Exorcista",
            diretor: "William Friedkin",
            elenco: "Linda Blair, Ellen Burstyn, Max von Sydow",
            sinopse: "Uma jovem é possuída por um demônio e um padre é chamado para realizar o exorcismo.",
            imagem: "imagens/oexorcista.jpg"  // Caminho relativo para a imagem
        },
        {
            titulo: "O Iluminado",
            diretor: "Stanley Kubrick",
            elenco: "Jack Nicholson, Shelley Duvall, Danny Lloyd",
            sinopse: "Um escritor se torna cada vez mais instável enquanto cuida de um hotel isolado com sua família.",
            imagem: "imagens/oiluminado.jpg"  // Caminho relativo para a imagem
        },
        {
            titulo: "A Bruxa",
            diretor: "Robert Eggers",
            elenco: "Anya Taylor-Joy, Ralph Ineson, Kate Dickie",
            sinopse: "Uma família puritana enfrenta forças malignas enquanto vive em uma fazenda isolada.",
            imagem: "imagens/abruxa.jpg"  // Caminho relativo para a imagem
        },
        {
            titulo: "Hereditary",
            diretor: "Ari Aster",
            elenco: "Toni Collette, Alex Wolff, Milly Shapiro",
            sinopse: "Após a morte de sua mãe, uma família começa a desenterrar segredos que levam a uma série de eventos aterrorizantes.",
            imagem: "imagens/hereditario.jpg"  // Caminho relativo para a imagem
        }
    ]
}

// Função para criar os filmes e exibi-los no HTML
function exibirFilmes() {
    // Obter os contêineres de cada categoria
    const acaoContainer = document.getElementById("acao");
    const romanceContainer = document.getElementById("romance");
    const terrorContainer = document.getElementById("terror");

    // Função para exibir filmes de uma categoria
    // foreach usado para percorrer elementos dentro de uma array fórichti
    function exibirCategoria(filmes, container) {
        filmes.forEach(filme => {
            const divFilme = document.createElement("div");
            divFilme.classList.add("filme");
 
            divFilme.innerHTML = `
                <img src="${filme.imagem}" alt="${filme.titulo}">
                <h3>${filme.titulo}</h3>
                <p><strong>Diretor:</strong> ${filme.diretor}</p>
                <p><strong>Elenco:</strong> ${filme.elenco}</p>
                <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
            `;

            container.appendChild(divFilme);
        });
    }

    // Exibir filmes para cada categoria
    exibirCategoria(filmes.acao, acaoContainer);
    exibirCategoria(filmes.romance, romanceContainer);
    exibirCategoria(filmes.terror, terrorContainer);
}

// Chamar a função para exibir os filmes
exibirFilmes();
