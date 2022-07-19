const { Bot } = require('mineflayer');
const kd = require('../db/stats');

module.exports = {
    name: 'stats',
    aliases: ['kd'],

    /**
     * 
     * @param {Bot} bot 
     * @param {String} username 
     * @param {String[]} args 
     */
    async execute(bot, username, args) {
        let name = args[0] || username;

        let mapData = (await kd.find()).filter(data => data.username.toLowerCase() == name.toLowerCase());
        let kdData = mapData[0];

        if(!kdData) return bot.sendMessage('whisper', bot.data.notFoundPlayers);

        let kills = kdData?.kills || 0;
        let deaths = kdData?.deaths || 0;
        let kda = kills / deaths || 0.00;

        bot.sendMessage('whisper', name + ' - K: ' + kills + " - D: " + deaths + " - K/D: " + kda.toFixed(2));
    }
}
