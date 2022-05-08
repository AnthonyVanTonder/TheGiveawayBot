//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'about',
   description: 'Shows info about the bot',
   run: async(client, interaction) => {
     let server = client.guilds.cache.size;
     let shard = client.ws.shards.size;
     let djs = require('discord.js').version;
     
     let statsembed = new MessageEmbed()
         .setColor("#FF4900")
         .setDescription(`🎉 **All about ${client.user.username}** 🎉`)
         .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
        .addFields(
            {
                name: 'Hold giveaways quickly and easily!',
                value: `Hello! I'm **${client.user.username}**, and I'm here to make it as easy as possible to hold giveaways on your Discord server! I was created by [Anthony van Tonder#2056](<https://anthonyvantonder.wordpress.com/>) (<@853462855784464416>). Written In [Discord.js](https://discord.js.org/) v${djs} and [Node.js](https://nodejs.org/) ${process.version}. Check out my commands by typing **/commands**, and checkout my website at: https://thegiveawaybot.wordpress.com/.`
            }
        )
      .addField("📊 Stats", `${server} Servers\n${shard} Shards`, true)
      .addField("📌 Ping", `**Latency:** ${Date.now() - interaction.createdTimestamp}ms\n**API Latency:** ${Math.round(client.ws.ping)}ms`, true)
      .addField("🌐 Links", "[Website](https://thegiveawaybot.wordpress.com/)\n[Invite](https://thegiveawaybot.wordpress.com/invite/)\n[Support](https://thegiveawaybot.wordpress.com/discord/)", true)
        .setTimestamp()
        await interaction.reply({ embeds: [statsembed] });
    }
}

//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You
