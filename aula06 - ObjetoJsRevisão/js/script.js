class Filme {
    constructor(valNome,valDescricao,valData,valDiretor, valCategoria){
        this.nome = valNome;
        this.descricao = valDescricao;
        this.data = valData;
        this.diretor = valDiretor;
        this.categoria = valCategoria;
    }
}
// SELETORES
var cadastroBtn = document.querySelector("#cadastroFilmesBtn");
var listarBtn = document.querySelector("#listarFilmesBtn");

cadastroBtn.addEventListener("click", cadastrar);
listarBtn.addEventListener("click", listar);
var filme = null;

function cadastrar() {
    let nomeFilme = document.querySelector("#nomeFilme").value;
    let descricaoFilme = document.querySelector("#descricaoFilme").value;
    let dataFilme = document.querySelector("#dataFilme").value;
    let diretorFilme = document.querySelector("#diretorFilme").value;
    let categoriaFilme = document.querySelector("#categoriaFilme").value;

    filme = new Filme(nomeFilme,descricaoFilme,dataFilme,diretorFilme,categoriaFilme);
}

function listar(){
    let resposta = document.querySelector("#resposta");
    resposta.innerHTML += `<div class="filme">
        <h2>${filme.nome}</h2>
        <p>Descrição do filme: ${filme.descricao}</p>
        <p>Data de lançamento: ${filme.data}</p>
        <p>Diretor : ${filme.diretor}</p>
        <p style="color: blue;">${filme.categoria}</p>
    </div>`
}