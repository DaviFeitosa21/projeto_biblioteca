let livros = []

const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' //API

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointAPI) //requisição para a API
    livros = await res.json() //resposta da requisição
    console.table(livros)
    exibirOsLivrosNaTela(livros)
}





