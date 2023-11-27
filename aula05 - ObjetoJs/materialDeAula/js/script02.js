class Produto {
    constructor(valorId, valorNome, valorMarca, valorPreco, valorQtEstoque){
       this.id = valorId;  
       this.nome = valorNome;  
       this.marca = valorMarca;  
       this.preco = valorPreco;  
       this.qtEstoque = valorQtEstoque;  
       this.qtVendida = 0;  
    }
    venda(quantidade){
        this.qtEstoque = this.qtEstoque - quantidade;
        this.qtVendida = this.qtVendida + quantidade;
        return "Foram vendidos "+quantidade+" do produto "+this.nome;
    }
}

var produto1 = new Produto(1,"Chocolate","Nestle",10,200);
var produto2 = new Produto(2,"Refri","CocaCola",4,180);
var produto3 = new Produto();
