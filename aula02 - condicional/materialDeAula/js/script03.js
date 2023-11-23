const usuario = "Victor";
const senha = "1234";

var usuarioDigitado = prompt("Insira o usuario");
var senhaDigitada = prompt("Insira a senha");

if(senhaDigitada == senha && usuarioDigitado == usuario){
    alert(`Seja bem vindo(a), ${usuario}`);
}else{
    alert("Usuário ou/e senha incorreto! Tente novamente!");
    location.reload();
}

// if(usuarioDigitado != usuario || senhaDigitada != senha ){
//     alert("deu erro!")
// }

// else{
//     if{}
// }

// else if{

// }