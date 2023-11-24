var tenet = ["Titulo = Tenet", "Descricao = lorem"];
var vingadores = ["Titulo = Vingadores guerra infinita", "Descricao = desc"];
var filmes = [vingadores,"Harry potter","De volta para o futuro", tenet, "Star wars", "Senhor dos anéis", "Minha mãe é uma peça", "Transfomers"];

// for(var cont = 0; cont < filmes.length ;cont++){
//     console.log(filmes[cont]);
// }

filmes.forEach( (cadaFilme) => {
    console.log(cadaFilme);
} );