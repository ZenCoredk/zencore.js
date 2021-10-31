const { Intents } = require("discord.js")

module.exports = {

    async getStatstics(bot) {

        console.log("Getting stats")
        return {
            intents: {
                code: bot.options.intents,
                array: new Intents(bot.options.intents).toArray()
            },
            guilds: (await bot.guilds.cache.size),
        }
    }
    
}