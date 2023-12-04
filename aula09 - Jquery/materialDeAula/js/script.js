//INSTALAÇÃO
// visite o site https://jquery.com/download/
// clique na opção "Download the uncompressed, development jQuery 3.7.1"
// Aberto o arquivo, aperte o botão direito e salvar página como..
// salve em um local de sua preferencia

// SELETOR JQUERY
// variavel = $(# ou . elemento);
// text() se vazio, lista o texto, se com valor, sobrescreve o conteudo
var titulo = $("#tituloSite").text("Aula Jquery");

// sem jquery
// var paragrafo = document.querySelector("#paragrafo");
// paragrafo.addEventListener("mouseover", souParagrafo);
// function souParagrafo(){
//     console.log("Sou um paragrafo");
// }

//COM JQUERY
$("#paragrafo").on("mouseover", function(){
    // let btn = $("#btn")
    console.log("Sou um paragrafo");
});

//COMPORTAMENTO JQUERY
var nome = "Victor";
var erro = undefined;

$("#nomeUsuario").text(erro);

//ALGORITMO EXEMPLO
$("#blocoDeTexto").on("input", function(){
    let blocoVal = $("#blocoDeTexto").val();
    let numCaracteres = $("#numCaracteres");

    numCaracteres.text(blocoVal.length);
});

