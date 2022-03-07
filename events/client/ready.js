const config = require(`../../botconfig/config.json`);
const Discord = require("discord.js");

module.exports = async (client) => {
  try {
    try {
      client.logger(`Discord Bot is online!`.bold.brightGreen);

      client.logger(
        `Bot User: `.brightBlue + `${client.user.tag}`.blue + `\n` +
        `Guild(s): `.brightBlue + `${client.guilds.cache.size} Servers`.blue + `\n` +
        `Watching: `.brightBlue + `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members`.blue + `\n` +
        `Slash Commands: `.brightBlue + `${client.slashCommands.size}`.blue + `\n` +
        `Discord.js: `.brightBlue + `v${Discord.version}`.blue + `\n` +
        `Node.js: `.brightBlue + `${process.version}`.blue + `\n` +
        `Plattform: `.brightBlue + `${process.platform} ${process.arch}`.blue + `\n` +
        `MemoryMemory: `.brightBlue + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`.blue
      );
    } catch{ /* */ }
  } catch (e) {
    console.log(e)
  }
}