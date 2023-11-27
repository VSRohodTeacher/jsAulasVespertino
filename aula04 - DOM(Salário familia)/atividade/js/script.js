//seleciona input
var input = document.querySelector("#inputText");

//adicionar evento de foco, perder foco
//foco, input amarelo
input.addEventListener("focus", mudaCor);
input.addEventListener("keyup", mudaCorVerifica);

function mudaCor(){
    let resposta = document.querySelector("#resposta");
    input.style.background = "yellow";
    resposta.innerHTML = "Digite uma senha maior que 3 digitos"
}

//perde foco, se tiver menos que 3, vermelho, se maior que 3, verde 
function mudaCorVerifica(){
    let inputValor = input.value.length;
    if(inputValor < 3){
        let resposta = document.querySelector("#resposta");
        input.style.background = "red";
        resposta.innerHTML = "Digite uma senha válida!"
    }else{
        let resposta = document.querySelector("#resposta");
        input.style.background = "green";
        resposta.innerHTML = "Senha válida!"
    }
}