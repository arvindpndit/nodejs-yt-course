//

const { Telegraf } = require("telegraf");

const bot = new Telegraf("7148182058:AAHdlNn4Gk4Y4NsFp58DBitPwz-xFxfJlTk");

bot.start((ctx) => ctx.reply("I'm the best bot in the entire world"));
bot.command("food", (ctx) => ctx.reply("I don't provide any food, Sorry"));

bot.launch();
