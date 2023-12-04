var jogos = ["Elden Ring","Red Dead 2","Alone in the dark 98","Crisis"];

const btnProcurar = document.querySelector("#btnProcurar");

btnProcurar.addEventListener("click", buscarJogos);

function buscarJogos(){
    let procurar = document.querySelector("#procurar").value;
    let resposta = document.querySelector("#resposta");

    var resultado = jogos.includes(procurar);
    if(resultado == true){
        resposta.innerHTML = `O jogo foi encontrado! Jogo citado : ${procurar}`
    }else{
        resposta.innerHTML = `O jogo não foi encontrado!`
    }
}