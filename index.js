/*
const TelegramBot = require('node-telegram-bot-api');

const token = '714012713:AAER2HFO8xw7P8IMauKJdbkswgA6MhhhszM';
let bot = new TelegramBot(token, {polling: true});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hi from Denis, bot says: "Hi, ${msg.from.first_name}"`),
});
*/


const telegram = require('telegram-bot-api');
const api = new telegram({
  token: '714012713:AAER2HFO8xw7P8IMauKJdbkswgA6MhhhszM',
  updates: {
    enabled: true,
    get_interval: 1000
  }
});
api.on('message', function(message)
{
  let chat_id = message.chat.id;
  console.log("This is the user's chat id"+chat_id);

  api.sendPhoto({
    chat_id : message.chat.id,
    caption: 'This is my test image',
    photo: '../src/img/1.jpeg'
  })
    .then(function(data)
    {
      console.log(data);
    });
});