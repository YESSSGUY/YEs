const Discord = require('discord.js');
require("dotenv").config()
const { on } = require('events');
const { userInfo } = require('os');

const TOKEN = "OTMxMTk4MTM0OTA0ODMyMDEw.YeA72A.RwL_sx2LJ_zw8WdlZXugGWIHzew"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on('ready', () => {
    console.log(`Discord bot is online. Logged in as ${client.user.tag}`)
})

client.on("messageCreate", message => {
    if(message.content == "hi"){
        message.reply("hewo")
    }
})

client.login(process.env.TOKEN);