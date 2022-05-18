//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'gdevelopers',
   description: 'Shows The Developers Of TheGiveawayBot',
   run: async(client, interaction) => {
      
      let statsembed = new MessageEmbed()
         .setColor("#FF4900")
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setTitle("TheGiveawayBot Developers")
          .setURL("https://thegiveawaybot.wordpress.com/")
            .setDescription(`[Anthony van Tonder](https://anthonyvantonder.wordpress.com/) - Web/Bot Developer`)
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
        .setTimestamp()
        await interaction.reply({ embeds: [statsembed] });
    }
}
