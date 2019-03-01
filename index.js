const TelegramBot = require('node-telegram-bot-api');

const token = '714012713:AAER2HFO8xw7P8IMauKJdbkswgA6MhhhszM';
let bot = new TelegramBot(token, {polling: true});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hi from Denis, bot says: "Hi, ${msg.from.first_name}"`)
});
bot.sendPhoto({
  chatId: msg.chat.id,
  caption: 'Test caption',
  photo: '../src/img/1.jpg'
}, function(err, msg) {
  console.log(err);
  console.log(msg);
});