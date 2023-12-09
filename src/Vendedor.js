class Vendedor {
    nome
    id_discord
    cargo
    roles
    constructor (nome, id_discord, roles) {
        this.nome = nome;
        this.id_discord = id_discord;
        this.roles = roles;
        this.gerente = ["1169271951546650664", "1169271952372936704", "1169271953463447582", "1169271954063237125", "1176870798913446079"]
        this.subLider = ["1169271949768278087", "1169271950783295649", "404887237700878356", "404888542725013504"]
        roles.forEach(element => {
            this.gerente.forEach( id_gerente => {
                if (id_gerente === element.id) {
                    if (this.cargo !== "sublider") {
                        this.cargo = "gerente"
                    }
                }
            })
            this.subLider.forEach(id_sublider => {
                if (id_sublider === element.id) {
                    this.cargo = "sublider"
                }
            }) 
            
        });
    }
}

module.exports = Vendedor