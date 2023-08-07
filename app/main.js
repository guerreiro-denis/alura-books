let livros = [];
const endPointDaAPI = "https://raw.githubusercontent.com/guerreiro-denis/alura-books/main/livros.json";
getBuscarLivrosDaAPI();



async function getBuscarLivrosDaAPI () {
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicaDescontos(livros);
    exibirLivroNaTela(livrosComDesconto);
}


