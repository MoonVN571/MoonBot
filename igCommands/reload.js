const { Bot } = require('mineflayer');
module.exports = {
    name: 'reload',
    description: 'Tải lại bot trong server',
    dev: true,
    
    /**
     * 
     * @param {Bot} bot 
     * @param {String} username 
     * @param {String[]} args 
     */
    async execute(bot, username, args) {
        bot.quit('force');
    }
}