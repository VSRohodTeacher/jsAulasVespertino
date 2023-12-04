//PROMISSES

var primeiroPromisse = new Promise((resolve, reject) => {
    //PROMISSES SE ASSEMELHAM A PROMESSAS PODEMOS CUMPRI-LAS OU NÃO!
    var nome = "aa";

    if(nome == "Victor"){
        // PROMESSA CUMPRIDA
        resolve("Opa seja bem vindo Victor!");
    }else{
        // PROMESSA QUEBRADA
        reject("Usuário não autorizado!")
    }
});
// THEN - ESPERA RESOLVE
// CATCH - ESPERA O REJECT
primeiroPromisse.then((data) => {
    console.log(data);
});


//AWAIT

function sujeitoDemorado(){
    return new Promise((resolve) => {
        // DEFINE UM TEMPO PARA QUE OCORRA O CÓDIGO
        setTimeout(()=> {
            console.log("Tudo bem?");
            resolve();
        }, 5000)
    });
}
// RODA FUNÇÕES DE FORMA ASSÍNCRONA
async function msg(){
    console.log("Boa tarde!");
    // ESPERA UM PROCESSO ACONTECER ANTES DE CONTINUAR LENDO O CÓDIGO!
    await sujeitoDemorado();
    console.log("Espero um excelente dia!");
}

msg();

//OBJECT ENTRIES
var computador = {
    sistemaOperacional : "Windows",
    placaMae: "Rog Strix",
    placaDeVideo: "RTX 4090 TI",
    processador: "INTEL I9",
    monitor: "MONITOR AMOLED ASUS",
    fonte: "FONTE 1050w",
    memoriaRam: "DDR5 4x16g Ram" 
}

console.log(computador.placaDeVideo);

var arrayComputador = Object.keys(computador);

//INDEX OF - RETORNA SE UM TERMO EXISTE O SEU INDICE, CASO NÃO EXISTA,-1
console.log(arrayComputador.indexOf("memoriaRam"));
//INCLUDES - RETORNA SE UM TERMO EXISTE, APENAS TRUE E FALSE
// console.log(arrayComputador.includes("memoriaRam"));

// var pergunta = prompt("Pesquisa de componentes para pc");
// var processo = arrayComputador.indexOf(pergunta);
// if (processo == -1){
//     alert("Componente não existe!");
//     var adicionar = confirm("Deseja adiciona-lo?");
//     if(adicionar == false){
//         alert("Tudo bem! Tenha um bom dia!");
//     }else{
//         arrayComputador.push(pergunta);
//     }
// }else{
//     alert("Componente existe!");
// }


console.log(Object.entries(computador));


const frutas = ["Banana","Maça","Abacaxi","Tomate","Morango"];
const resultadoMap = frutas.map((cadaElemento) => "<li> Fruta :"+cadaElemento+"</li>");

document.getElementById("resposta").innerHTML = `O map, faz uma função para cada elemento de um array ou objeto <ul>${resultadoMap}</ul>`