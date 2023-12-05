var caixa = $("#caixa");

$("#animacao1").on('click', function(){
    caixa.animate({width : "500px", height : "500px", borderRadius : "100%"});
});

$("#animacao2").on('click', function(){
    caixa.animate({width : "300px", height : "300px", borderRadius : "0%"}).animate({marginLeft : "300px", rotate : "360deg"});
});

$("#animacao3").on('click', function(){
    caixa.animate({margin : "0px", rotate : "-360deg"});
});