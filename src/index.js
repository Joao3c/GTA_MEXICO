const Discord = require("discord.js");
const config = require("./config.json")

const client = new Discord.Client({
    intents: ["Guilds", "GuildMessages"]
});

client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on("messageCreate", message => {
    if (message.author.id === client.user.id) return;

    const CHANNEL_BOT_HARU = "404672946179670018";
    const CHANNEL_BOT_MEXICO = "1182730291731767315";

    if (message.channelId === CHANNEL_BOT || message.channelId === CHANNEL_BOT_MEXICO) return

    console.log("Oi");

})

client.login(config.token)