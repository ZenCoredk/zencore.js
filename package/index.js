const Discord = require("discord.js")

module.exports = {

    async getStatstics(bot) {

        for(let key in Discord.Intents.FLAGS) {
            console.log(Discord.Intents.FLAGS[key])
        } 

        console.log("Getting stats")
        return {
            intents: bot.options.intents,
            guilds: (await bot.guilds.cache.size),
        }
    }
    
}