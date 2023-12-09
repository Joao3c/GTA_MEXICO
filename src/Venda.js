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

        console.log("Municao: " + this.municao.nome)
        console.log("Quantidade: " + this.quantidade)
        console.log("Parceria: " + this.parceria)
        console.log("Valor Venda: " + this.valorVenda)
        console.log("Valor Deposito: " + this.valorDeposito)
        console.log("Vendedor: " + this.vendedor.nome)

    }
}

module.exports = Venda