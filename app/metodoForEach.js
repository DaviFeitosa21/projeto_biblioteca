const elementoParaInserirLivros = document.getElementById('livros')

//criando os elementos de cada livro
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro-img' : 'livro-img indisponivel'
        elementoParaInserirLivros.innerHTML += `
            <div class="livro" id="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="livro-cangaceiro">
                <h2>${livro.titulo}</h2>
                <p class="autor">${livro.autor}</p>
                <p class="preco">R$${livro.preco.toFixed(2)}</p>
                <div>
                    <span class="categoria">${livro.categoria}</span>
                </div>
            </div>
        `
    })
}