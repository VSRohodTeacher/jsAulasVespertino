// REPLACE / REPLACE ALL
var texto = "Olá mundo, o mundo é bacana e o mundo é suave!";
console.log(texto);
// MUDA UM TERMO
console.log(texto.replace("mundo","banana"));
// MUDA TODOS OS TERMOS
console.log(texto.replaceAll("mundo","banana"));

//CLASS LIST
var exemplo = document.querySelector("#exemplo");
exemplo.classList.remove("claro");
exemplo.classList.add("escuro");

function mudaTema(){
    //contains - verifica se elemento contem uma classe
    if(exemplo.classList.contains("escuro")){
        // replace - substitui uma classe por outra
        exemplo.classList.replace("escuro","claro");
    }else{
        exemplo.classList.replace("claro","escuro");
    }
}

function mudaClasse(){
    //toggle troca a classe de um elemento quando engatilhado
    exemplo.classList.toggle("escuro");
}

//CONCATENAÇÃO
var primeiroNome = "Victor";
var sobreNome = "Rohod";
var cartao = "7821"

//concatenção no começo
var nomeCompleto = sobreNome.padStart(11,primeiroNome);
console.log(nomeCompleto)
var nomeCompleto2 = sobreNome.padEnd(11,primeiroNome);
console.log(nomeCompleto2)
var cartaoEscondido = cartao.padStart(16,"*")
console.log(cartaoEscondido)