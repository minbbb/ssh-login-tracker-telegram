const { exec } = require('child_process');
const TelegramBot = require('node-telegram-bot-api');

const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const chatId = 'CHAT_ID';

const bot = new TelegramBot(token);

let lastOutput = [];

setInterval(() => {
  exec('last -F | awk \'{print $1, $3, $4, $5, $6, $7, $8}\'', (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    const newOutput = stdout.split('\n').filter(Boolean);
    const diff = newOutput.filter((line) => !lastOutput.includes(line));

    if (diff.length > 0) {
      bot.sendMessage(chatId, `Произошёл логин на сервере:\n${diff.join('\n')}`);
      lastOutput = newOutput;
    }
  });
}, 10000);