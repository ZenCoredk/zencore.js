const { Client, Intents } = require('discord.js');

const bot = new Client({
    intents: [ "GUILDS", "GUILD_MEMBERS", "DIRECT_MESSAGES" ]
})

const zencore = require("./../package/index")

bot.once("ready", async function() {
    console.log(`${bot.user.username} is now ready`)

    console.log(`Stats of ${JSON.stringify(await zencore.getStatstics(bot))}`)

})

bot.login()