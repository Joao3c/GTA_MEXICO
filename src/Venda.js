class Venda {
    municao
    quantidade
    parceria
    valorVenda
    valorDeposito
    vendedor

    constructor(municao, quantidade, vendedor) {
        this.municao = municao
        this.quantidade = quantidade
        this.vendedor = vendedor
    }

    verificarParceria(parceria) {
        switch (parceria) {
            case "parceria": case "p":
                this.parceria = true
                break;

            default:
                this.parceria = false
                break;
        }
        
    }

    calcularVenda() {
        const valorParceria  = 100;
        

        if (this.parceria == true) {
            this.valorVenda = (this.municao.preco - valorParceria) * this.quantidade
        } else {
            this.valorVenda = (this.municao.preco) * this.quantidade
        }

        if (this.vendedor.cargo === "sublider") {
            this.valorDeposito = this.valorVenda - (this.valorVenda * 0.3);
        } else {
            this.valorDeposito = this.valorVenda - (this.valorVenda * 0.25);
        }
/*
        console.log(this.municao)
        console.log(this.quantidade)
        console.log(this.parceria)
        console.log(this.valorVenda)
        console.log(this.valorDeposito)
        console.log(this.vendedor)
*/
    }
}

module.exports = Venda