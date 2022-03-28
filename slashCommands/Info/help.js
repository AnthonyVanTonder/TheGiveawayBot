//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'info-help',
   description: 'Shows you Help for TGB',
   run: async(client, interaction) => {
      
      let statsembed = new MessageEmbed()
         .setColor("#FF4900")
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setTitle("TheGiveawayBot Help")
            .setURL("https://thegiveawaybot.wordpress.com/")
            .setDescription(`:white_check_mark: Type \`/info-commands\` for a list of Commands\n\n:question: New to **TheGiveawayBot**? Check out our [TGB's Website](https://thegiveawaybot.wordpress.com/)\n\n:page_facing_up: Still need help? [Click Here](https://discord.gg/rRzrmgm8c3) to join our [Discord Server](https://discord.gg/rRzrmgm8c3)`)
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
        .setTimestamp()
        await interaction.reply({ embeds: [statsembed] });
    }
}
