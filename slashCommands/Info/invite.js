//Bot Coded by Anthony van Tonder Pleas Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'invite',
   description: 'Invite the bot to your server!',
   run: async(client, interaction) => {
      
      let statsembed = new MessageEmbed()
         .setColor("#FF4900")
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setTitle("Invite TheGiveawayBot")
            .setURL("https://thegiveawaybot.wordpress.com/")
            .setDescription(`🎉 Hello! I'm TheGiveawayBot! I help to make giveaways quick and easy!
You can add me to your server with this link:\n\n🔗 https://thegiveawaybot.wordpress.com/invite \n\nCheck out my commands by typing \`/commands\``)
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
        .setTimestamp()
        await interaction.reply({ embeds: [statsembed] });
    }
}

//Bot Coded by Anthony van Tonder Pleas Give Me Credits If Used Thank You
