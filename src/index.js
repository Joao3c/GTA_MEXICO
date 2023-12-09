const {Client, GatewayIntentBits, Partials} = require("discord.js");
const config = require("./config.json")
const Venda = require("./Venda")
const Vendedor = require("./Vendedor")
const Municao = require("./Municao")

const fajuta = new Municao("Fajuta", "fajuta", 600);
const five = new Municao("Five Seven", "five", 900);
const mp5 = new Municao("MP5", "mp5", 1000);
const tec9 = new Municao("TEC9", "tec9", 1000);
const ak47 = new Municao("AK-47", "ak", 1000);
const mk2 = new Municao("AK-MK2", "mk2", 1400);
const g3 = new Municao("G3", "g3", 1500);

const municoes = [fajuta, five, mp5, tec9, ak47, mk2, g3]


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [ Partials.Channel ]
});



client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on("messageCreate", message => {
    if (message.author.id === client.user.id) return;

    const CHANNEL_BOT_HARU = "404672946179670018";
    const CHANNEL_BOT_MEXICO_RELATORIO = "1170392516953120898";
    const CHANNEL_BOT_MEXICO_TESTE = "1182730291731767315";

    const PREFIX = "/";
        

    if (message.channelId === CHANNEL_BOT_HARU || message.channelId === CHANNEL_BOT_MEXICO_RELATORIO || message.channelId === CHANNEL_BOT_MEXICO_TESTE) {

        if (message.content === "!ajuda") {
            message.reply(`
Como utilizar:
\`\`\`* Primeiro coloque a quantidade de munição, depois o nome da munição e por último parceria.

* Para vendas com parceria, digite P ou Parceria.

Ex.: 50 G3 P\`\`\`
Nome das Munições:
\`\`\` - fajuta
 - five
 - mp5
 - tec9
 - ak
 - mk2
 - g3\`\`\`


            `)

            return;
        }

        if (message.content.split(" ").length !== 3) return;

        if (isNaN(message.content.split(" ")[0]) == false) {

            const QUANT = parseInt(message.content.split(" ")[0]);
            const NOME = message.content.split(" ")[1].toLowerCase();
            const ROLES = message.member.roles.cache;

            vendedor = new Vendedor(message.member.nickname, message.author.id, ROLES);            

            municoes.forEach( municao => {
                if (municao.subnome === NOME) {
                    console.log("-------------------------------------")
                    console.log(message.content)
                    venda = new Venda(municao, QUANT, vendedor)
                    venda.verificarParceria(message.content.split(" ")[2].toLowerCase())
                    venda.calcularVenda()
                }
            })

            message.channel.messages.fetch(message.id)
            .then(msg => {
                msg.delete()
                .then(()=> {console.log('Mensagem deletada')}) 
                .catch(error=>console.error(error)); 
            })
            .catch(error=>console.error(error));

            message.channel.send(`
<@${venda.vendedor.id_discord}>\`\`\`
Nome: ${venda.municao.nome}
Quant: ${venda.quantidade}
parceria: ${venda.parceria == true ? "Sim":"Não"}
Valor Venda: ${venda.valorVenda}
Valor Deposito: ${venda.valorDeposito}
Vendedor: @${venda.vendedor.nome}\`\`\``
            )

        
        }
    }

    
})

client.login(config.token2)