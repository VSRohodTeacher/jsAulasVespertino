$("#btnTabuada").on("click", function(){
    var numero = Number($("#numeroEscolhido").val());

    for (var i = 1; i <= 10; i++){
        document.querySelector("#resultadoTabuada").innerHTML += `${i} x ${numero} = ${i * numero} <br>`;
    }

});