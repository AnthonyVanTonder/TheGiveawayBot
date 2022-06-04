//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You

const os = require('os');
const { MessageEmbed } = require('discord.js');
const feroms = require('fero-ms');

module.exports = {
   name: 'gstats',
   description: 'Sends bot physical statistics',
   run: async(client, interaction) => {
     let totalSeconds = interaction.client.uptime / 1000;
        let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
            
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
      
      let djs = require('discord.js').version;
      let server = client.guilds.cache.size;
      let channel = client.channels.cache.size;
      let shard = client.ws.shards.size;
      
      let statsembed = new MessageEmbed()
         .setColor("#FF4900")
            .setAuthor(client.user.tag, client.user.displayAvatarURL())
            .setDescription(`[Website](https://thegiveawaybot.vercel.app) ● [Invite](https://thegiveawaybot.vercel.app/invite.html) ● [Support Server](https://thegiveawaybot.vercel.app/support.html)`)
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
        .addFields(
            {
                name: '🤖 • **Bot Name**',
                value: `${client.user.tag}`,
                inline: true
            },
            {
                name: '🏣 • **Servers**',
                value: `Total: ${server}`,
                inline: true
            },
            {
                name: '👨 • **Users**',
                value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members`,
                inline: true
            },
            {
                name: '📺 • **Channels**',
                value: `Total: ${channel}`,
                inline: true
            },
            {
                name: '⚙️ • **Slash Commands**',
                value: `Total: ${client.slashCommands.size}`,
                inline: true
            },
            {
                name: '📒 • **Discord.js**',
                value: `v${djs}`,
                inline: true
            },
            {
                name: '🚓 • **Node.js**',
                value: `${process.version}`,
                inline: true
            },
            {
                name: 'ℹ️ • **Platform**',
                value: `${process.platform} ${process.arch}`,
                inline: true
            },
            {
                name: '🐏 • **Memory Usage**',
                value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`,
                inline: true
            },
            {
                name: '💹 • **Uptime**',
                value: `${uptime}`,
                inline: true
            },
            {
                name: '📊 • **Shards**',
                value: `${shard}`,
                inline: true
            },
            {
                name: '📌 • **Ping**',
                value: `${client.ws.ping}ms`,
                inline: true
            }
        )
        .setTimestamp()
        await interaction.reply({ embeds: [statsembed] });
    }
}

//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You
