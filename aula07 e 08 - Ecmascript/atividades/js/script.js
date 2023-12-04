const btnMudarTermo = document.querySelector("#btnMudarTermo");
const btnMudarTodosTermos = document.querySelector("#btnMudarTodosTermos");

btnMudarTermo.addEventListener("click", mudarTermo);
btnMudarTodosTermos.addEventListener("click", mudarTodosTermos);

function mudarTermo(){
    let blocoDeTexto = document.querySelector("#blocoDeTexto");
    let removerTermo = document.querySelector("#removerTermo").value;
    let adicionarTermo = document.querySelector("#adicionarTermo").value;

    var blocoDeTextoFormatado = blocoDeTexto.value.replace(removerTermo,adicionarTermo);
    blocoDeTexto.value = blocoDeTextoFormatado;
}

function mudarTodosTermos(){
    let blocoDeTexto = document.querySelector("#blocoDeTexto");
    let removerTermo = document.querySelector("#removerTermo").value;
    let adicionarTermo = document.querySelector("#adicionarTermo").value;

    var blocoDeTextoFormatado = blocoDeTexto.value.replaceAll(removerTermo,adicionarTermo);
    blocoDeTexto.value = blocoDeTextoFormatado;
}