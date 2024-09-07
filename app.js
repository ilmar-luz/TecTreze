function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "Não encontrado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `}
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}