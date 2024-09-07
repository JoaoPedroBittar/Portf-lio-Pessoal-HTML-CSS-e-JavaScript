// Função que atualiza a seção com os resultados da pesquisa
function Pesquisar() {
    // Obtém o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    //Se campoPesquisa for um campo vazio, não retorna nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite um produto para pesquisar</p>"
        return
    }

    //Ou
    // campoPesquisa = campoPesquisa.toLowerCase()

    // Cria uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Percorre cada item no array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        //se titulo iuncludes campo pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Adiciona o HTML do item atual à string 'resultados'
            resultados += `
        <div class="item-resultado">
            <h2>
                <!-- Link com o título do item -->
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <!-- Descrição do item -->
            <p class="descricao-meta">${dado.descricao}</p>
            <!-- Link para mais informações, com o URL do item -->
            <a href=${dado.link} target="_blank">Conheça os produtos</a>
        </div>
        `;
        }
    }
    
    if (!resultados) {
        resultados = "<p>Nenhum produto encontrado</p>"
    }

    // Atualiza o conteúdo da seção com o HTML gerado
    section.innerHTML = resultados;
}
