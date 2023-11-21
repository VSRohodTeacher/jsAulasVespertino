console.log("Olá mundo :)");

// CAIXAS DE TEXTO 
// alert("Olá, este é meu primeiro comando Js!");
// confirm("Estou aprendendo Js?");
// prompt("Qual é o seu nome ?");

// VARIAVEIS 
//LET escopo local,sobrescrevivel
function testeLet(){
    let numero = 0;
    numero = 10;
    console.log(numero)
}

//CONST escopo global, não sobrescrevivel
const pi = 3.14;
console.log(pi);

//VAR escopo global, sobrescrevivel
var nome = "Victor";
console.log(nome);

var idade = prompt("Qual é a sua idade?");
// CONCATENAÇÃO
// PRIMEIRA MANEIRA +
// alert("Seja bem vindo(a)! "+nome);

// SEGUNDA MANEIRA ${} - IGNORA O TRECHO COMO TEXTO
alert(`Seja bem vindo(a)! ${nome}`);

// TIPOS DE VALORES
// NUMBER numeros
var real = 180;

// STRING textos
var texto = "Exemplo";

// BOOLEAN logicos ou verdadeiro e falso
var ligado = true;

// OBJETO
var carro = [];

