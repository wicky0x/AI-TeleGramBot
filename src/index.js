const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, {
    
    polling: true

});
// Start the Bot

bot.on('message', (message) => {

    console.log(message);
}

);