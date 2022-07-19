const { sendCustomMessage } = require('../functions/minecraft');
const seen = require('../db/seen');
const { getPlayersList } = require('../functions/minecraft/mcUtils');

module.exports = {
    name: 'playerLeft',

    async execute(bot, player) {
        if (bot.data.countPlayers <= getPlayersList(bot).length) return;
        if (!bot.data.mainServer) return;

        let seenData = await seen.findOne({ username: player.username });
        if (!seenData) await seen.create({ username: player.username, time: Date.now() });
        else {
            seenData.time = Date.now();
            seenData.save();
        }

        sendCustomMessage('disconnect', player.username + ' đã thoát khỏi server.');
    }
}