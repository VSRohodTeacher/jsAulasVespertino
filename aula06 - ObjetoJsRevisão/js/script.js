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
var filmes = [];

function cadastrar() {
    let nomeFilme = document.querySelector("#nomeFilme").value;
    let descricaoFilme = document.querySelector("#descricaoFilme").value;
    let dataFilme = document.querySelector("#dataFilme").value;
    let diretorFilme = document.querySelector("#diretorFilme").value;
    let categoriaFilme = document.querySelector("#categoriaFilme").value;
    let msgCadastro = document.querySelector("#msgCadastro");

    filmes.push(new Filme(nomeFilme,descricaoFilme,dataFilme,diretorFilme,categoriaFilme)); 
    msgCadastro.innerHTML = `<h5 class="sucesso">Filme cadastrado com sucesso!</h5>`

}

function listar(){
    let resposta = document.querySelector("#resposta");

    resposta.innerHTML = "";

    filmes.forEach((cadaFilme) => {
        resposta.innerHTML += `<div class="filme">
        <h2>${cadaFilme.nome}</h2>
        <p>Descrição do filme: ${cadaFilme.descricao}</p>
        <p>Data de lançamento: ${cadaFilme.data}</p>
        <p>Diretor : ${cadaFilme.diretor}</p>
        <p style="color: blue;">${cadaFilme.categoria}</p>
    </div>`
    });
    
}