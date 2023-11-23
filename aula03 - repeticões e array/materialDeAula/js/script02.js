var produto1 = "Tenis";
var produto2 = "Chocolate";
var produto3 = "VideoGame";
console.log(produto1)

var listaDeProdutos = ["Tenis", "Chocolate", "VideoGame"];
console.log(listaDeProdutos)
// indice
console.log(listaDeProdutos[2]);

//metodo alternativo 
// var mercadoria = Array();
// mercadoria[0] = "Colar";
// mercadoria[1] = "Tenis";
// mercadoria[2] = "Bola";

// COMANDOS ARRAY 
// PUSH - ADICIONAR UM ELEMENTO NO FINAL DO ARRAY
listaDeProdutos.push("Bola");
console.log(listaDeProdutos);
// UNSHIFT - ADICIONAR UM ELEMENTO NO COMEÇO DO ARRAY
listaDeProdutos.unshift("Bicicleta");
console.log(listaDeProdutos);
// POP - REMOVER UM ELEMENTO NO FINAL DO ARRAY
listaDeProdutos.pop();
console.log(listaDeProdutos);
// SHIFT - REMOVER UM ELEMENTO NO COMEÇO DO ARRAY
listaDeProdutos.shift();
console.log(listaDeProdutos);
// SPLICE - (INDICE DESEJADO,QUANTOS INDICES IRA AFETAR,O QUE SERÁ ADICIONADO)
listaDeProdutos.splice(1,2,"Celular");
console.log(listaDeProdutos);
//INCLUDES - Pesquisa se o elemento existe
console.log(listaDeProdutos.includes("Aleatorio"));

// LENGTH - CONTA QUANTOS ELEMENTOS TEM NO ARRAY
console.log("Exitem "+listaDeProdutos.length+" produtos");