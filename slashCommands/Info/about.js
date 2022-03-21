//Bot Coded by AnthonyVTdev Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'info-about',
   description: 'Shows info about the bot',
   run: async(client, interaction) => {
         let statsembed = new MessageEmbed()
         .setColor("#FF4900")
         .setDescription(`🎉 **All about TheGiveawayBot** 🎉`)
         .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
        .addFields(
            {
                name: 'Hold giveaways quickly and easily!',
                value: 'Hello! Im **TheGiveawayBot**, and Im here to make it as easy as possible to hold giveaways on your Discord server! I was created by [Anthony van Tonder#2056](<https://anthonyvantonder.wordpress.com/>) (<@853462855784464416>). Check out my commands by typing `/info-help`, and checkout my website at: https://thegiveawaybot.wordpress.com/.'
            }
        )
        .setTimestamp()
        await interaction.reply({ embeds: [statsembed] });
    }
}

//Bot Coded by AnthonyVTdev Give Me Credits If Used Thank You
