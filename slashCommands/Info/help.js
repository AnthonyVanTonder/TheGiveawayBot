//Bot Coded by Anthony van Tonder#2056 Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'ghelp',
   description: 'Shows you Help for TheGiveawayBot!',
   toggleOff: false,
   run: async(client, interaction) => {
      
      let statsembed = new MessageEmbed()
         .setColor("#FF4900")
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setTitle("TheGiveawayBot Help")
            .setURL("https://thegiveawaybot.wordpress.com/")
            .setDescription(`:white_check_mark: Type \`/gcommands\` for a list of Commands\n\n:question: New to **TheGiveawayBot**? Check out our [TheGiveawayBot's FAQ](https://thegiveawaybot.wordpress.com/faq)\n\n:page_facing_up: Still need help? [Click Here](https://thegiveawaybot.wordpress.com/discord/) to join our [Discord Server](https://thegiveawaybot.wordpress.com/discord/)`)
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
        .setTimestamp()
        await interaction.reply({ embeds: [statsembed],
        ephemeral: true  
       });
    }
}

//Bot Coded by Anthony van Tonder#2056 Give Me Credits If Used Thank You
