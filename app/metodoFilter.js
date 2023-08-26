const botoes = document.querySelectorAll('.nav-link')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) //criando evento de click

//funcão que irá filtrar todos os livros
function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) //variavel que seleciona os id's
    const categoria = elementoBtn.value //variavel que seleciona os valores da variavel anterior

    //livrosFiltrados recebe o valor de categoria e categoria compara se é igual a disponivel
    //se o valor for verdadeiro retornará filtrarPorDisponibilidade() se for falso retornará filtrarPorCategoria(categoria)
    let livrosFiltrados = categoria == 'disponivel' ?  filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}

//esta função percorre por cada elemento do array e compara se a categoria informada na API é igual a categoria informada na variavel
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

//esta função percorre por cada elemento do array e retorna apenas os livros com a quantidade maior que zero
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
