// REPETIÇÃO

// ENQUANTO (verifica e faz)
// enquanto (condicao) faca
// processo
// contador <- contador + 1
// fimEnquanto
var numero = 20;
while (numero <= 10){
    console.log(numero + " Bacana demais!");
    numero = numero + 1;
}

// FACA ATE
// faca
//     algo
//     controlador = controlador + 1;
// ate (condicao)
var contador = 20
do{
    console.log(contador);
    contador++;
}while( contador <= 10);

// PARA
// para (var, condicao, controlado)
//     algo
// fimPara
for(var cont = 1; cont <= 20; cont++){
    console.log("esse codigo rodou "+cont+" vezes");
}

// FACA PARA CADA
var listaDeElementos = ["elemento1","elemento2","elemento3"];
//funcao anonima
listaDeElementos.forEach( (cadaElemento) => {
    console.log("elementos "+cadaElemento);
});