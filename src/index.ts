import { Telegraf } from 'telegraf';
import { BOT_TOKEN } from './config/env';

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome!'));
bot.launch();

console.log('Bot is running...');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
