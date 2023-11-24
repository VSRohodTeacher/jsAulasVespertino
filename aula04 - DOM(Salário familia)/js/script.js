// coletar valores
// var empregado = document.getElementById("empregado").value;
var btnCalcular = document.querySelector("#btnCalcular");
// configurar o click no botao
btnCalcular.addEventListener("click", calcular);
// calcular salario familia
function calcular(){
    let empregado = document.querySelector("#empregado").value;
    let filhos = document.querySelector("#filho").value;
    let salario = document.querySelector("#salario").value;
    let resposta = document.querySelector("#resposta");


    if(filhos == 0 || salario == 0 || empregado == "" || filhos < 0 || salario < 0){
        resposta.innerHTML = "Insira suas informações corretamente!";
    } else if(salario > 0 && salario <= 806.80){
        let resultado = filhos * 41.37;
        resposta.innerHTML = `O salário família do empregado ${empregado} é de R$ ${resultado.toFixed(2)}`;
    } else if ( salario >= 806.81 && salario <= 1212.64 ){
        let resultado = filhos * 29.16;
        resposta.innerHTML = `O salário família do empregado ${empregado} é de R$ ${resultado.toFixed(2)}`;        
    } else {
        resposta.innerHTML = `O empregado ${empregado} não tem direito a salário família`;
    }
}