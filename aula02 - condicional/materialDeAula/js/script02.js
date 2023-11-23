var numero1 = Number(prompt("Digite aqui seu primeiro numero"));
var operador = prompt("Digite a operação matemática");
var numero2 = Number(prompt("Digite aqui seu segundo numero"));

// escolha (var) 
// caso "isso"
// faz aquilo
// quebra break 
// caso "teste"
// faz uma coisa
// fimFaca

function calcularNovamente(){
    var novoCalculo = confirm("Deseja fazer um novo calculo?");
    if(novoCalculo == true){
        location.reload();
    }
}

switch(operador){
    case "+":
        var resultado = numero1 + numero2;
        alert(resultado);
        calcularNovamente();
        break;
    case "-":
        var resultado = numero1 - numero2;
        alert(resultado);
        calcularNovamente();
        break;
    case "*":
        var resultado = numero1 * numero2;
        alert(resultado);
        calcularNovamente();
        break;
    case "/":
        var resultado = numero1 / numero2;
        alert(resultado);
        calcularNovamente();
        break;
    default:
        alert("Operador inválido, tente novamente!");
        location.reload();
        break;
}
