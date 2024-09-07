function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
      section.innerHTML = "<p>Nada foi encontrado</p>";
      return;
    }
  
    // Converte o valor da pesquisa para minúsculas para uma comparação case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags ? dado.tags.toLowerCase() : ""; // Verifica se há tags antes de usar
  
      // Verifica se o termo pesquisado está no título, na descrição ou nas tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Adiciona um novo item à string de resultados
        resultados += `
              <div class="item-resultado">
                  <h2>
                      <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                  <a href="${dado.link}" target="_blank">Mais informações</a>
              </div>
              `;
      }
    }
  
    // Verifica se há resultados, caso contrário, exibe a mensagem de "nada encontrado"
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }
