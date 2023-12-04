var verificarPromise = new Promise((resolve, reject) => {
    let nome = "AD";
    let senha = "ADM";

    if(nome == "ADM" && senha == "ADM"){
        resolve("Seja bem vindo administrador!");
    }else{
        reject("O usuário não é adm! Faça o login de maneira alternativa!");
    }
});

verificarPromise.then((x) => {
    console.log(x);
    // alert("DEU BOM!");
});

verificarPromise.catch((x) => {
    console.log(x)
    // alert("DEU RUIM!");
});