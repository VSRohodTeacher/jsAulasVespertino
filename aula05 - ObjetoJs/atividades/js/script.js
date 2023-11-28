class Carro {
   constructor(valMarca,valModelo, valAno, valCor, valVelocidadeMax){
    this.marca = valMarca;
    this.modelo = valModelo;
    this.ano = valAno;
    this.cor = valCor;
    this.velocidadeMax = valVelocidadeMax;
    this.velocidadeAtual = 0;
   }
   acelerar(velAcelerada){
    if(velAcelerada <= 0){
        return "Operação não permitida! Acelere acima de 0!";
    }else if(velAcelerada + this.velocidadeAtual > this.velocidadeMax ){
        return `Operação não permitida! Velocidade máxima atingida!`;
    }else{
        this.velocidadeAtual += velAcelerada;
        return `Velocidade atual é de: ${this.velocidadeAtual}`;
    }
   }
}


// HTML
var btnCarro = document.getElementById("btnCarro");
var resultado = document.getElementById("resultado");

btnCarro.addEventListener('click', criarCarro);

function criarCarro(){
    let marcaInput = document.querySelector("#marca").value;
    let modeloInput = document.querySelector("#modelo").value;
    let anoInput = document.querySelector("#ano").value;
    let corInput = document.querySelector("#cor").value;
    let velocidadeMaxInput = document.querySelector("#velocidadeMax").value;

    var carro = new Carro(marcaInput,modeloInput,anoInput,corInput,velocidadeMaxInput);
    console.log(carro.cor)
    resultado.innerHTML = `<div class="carroResultado">
    <h3>${carro.modelo}</h3>
    <p>${carro.marca}</p>
    <span style="color : ${carro.cor};">COR ESCOLHIDA</span>
    </div>`;
} 