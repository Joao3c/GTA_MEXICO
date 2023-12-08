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
})

client.login(config.token)