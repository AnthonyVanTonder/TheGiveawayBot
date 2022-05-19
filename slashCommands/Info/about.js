const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'gabout',
   description: 'Shows info about the bot',
   toggleOff: false,
   run: async(client, interaction) => {
     let server = client.guilds.cache.size;
     let shard = client.ws.shards.size;
     let djs = require('discord.js').version;
     
     let statsembed = new MessageEmbed()
       .setColor("#FF4900")
       .setFooter(`Requested by ${interaction.user.tag}`, interaction.user.displayAvatarURL())
       .setTitle("Hold giveaways quickly and easily!") 
       .setDescription(`Hello! I'm **${client.user.username}**, and I'm here to make it as easy as possible to hold giveaways on your Discord server! I was created by [Anthony van Tonder#2056](<https://anthonyvantonder.wordpress.com/>) (<@853462855784464416>). Written In [Discord.js](https://discord.js.org/) v${djs} and [Node.js](https://nodejs.org/) ${process.version}. Check out my commands by typing \`/gcommands\`, and checkout my website at: https://thegiveawaybot.wordpress.com`)
       .addField("📊 Stats", `${server} Servers\n${shard} Shards`, true)
       .addField("📌 Ping", `**Latency:** ${Date.now() - interaction.createdTimestamp}ms\n**API Latency:** ${Math.round(client.ws.ping)}ms`, true)
       .addField("🌐 Links", "[Website](https://thegiveawaybot.wordpress.com/)\n[Invite](https://thegiveawaybot.wordpress.com/invite/)\n[Support](https://thegiveawaybot.wordpress.com/discord/)", true)
        .setTimestamp()
        await interaction.reply({ embeds: [statsembed], 
        content: `🎉 All about **${client.user.username}** 🎉`, 
        ephemeral: true
       });
    }
}
