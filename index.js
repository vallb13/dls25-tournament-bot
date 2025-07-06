const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

const TOKEN = '7608012475:AAEKmQn0CQcuUJohlF7CikUAZwL0MNSecoY';
const bot = new TelegramBot(TOKEN, { polling: true });

app.get('/', (req, res) => {
  res.send('DLS25 Tournament Bot is Running');
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '👋 Welcome to DLS25 Tournament Bot!\n\nTo register, type /register');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
