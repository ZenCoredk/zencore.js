const Discord = require("discord.js")
const bot = new Discord.Client({
    intents: [ "GUILDS", "GUILD_MEMBERS", "DIRECT_MESSAGES" ]
})

const zencore = require("zencore")

bot.once("ready", async function() {
    console.log(`${bot.user.username} is now ready`)

    console.log(`Stats of ${JSON.stringify(await zencore.getStatstics(bot))}`)

})

bot.login("NDUwMjQ0ODc1NDUxODkxNzIy.WwqJNw.I_E7UhM_wzHYbVfD6ZbYw7dsf_k")