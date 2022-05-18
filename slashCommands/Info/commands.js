//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'gcommands',
   description: 'View all the commands available to the bot!',
   toggleOff: false,
   run: async(client, interaction) => {

      let statsembed = new MessageEmbed()
      .setColor("#FF4900")      
      .setThumbnail(`${client.user.displayAvatarURL()}`)
      .setDescription(`🎉 __**${client.user.username}** commands:__\n\n**/gabout** - shows info about the bot\n**/ginvite** - shows how to invite the bot\n**/gping** - checks the bot's latency\n **/ghelp** - Shows you Help for ${client.user.username}\n**/gcommands** - View all the commands available to the bot!\n**/gfeedback [content]** - Send me feedback. (can include bugs/problems)\n**/gstats** - Sends bot physical statistics.\n**/gsupport** - Gets a link to my support guild!\n**/gdevelopers** - Shows The Developers Of ${client.user.username}\n\n**__Giveaway:__**\n\n**/g start [time] [winners] [prize] [#channel]** - starts a giveaway (quick setup)\n**/g end [messageId]** - ends (picks a winner for) the specified or latest giveaway in the current channel.\n**/g reroll [messageId]** - re-rolls the specified or latest giveaway in the current channel.\n/**g edit [messageId]** - allows you do edit your giveaway that you have hosted.\n**/g delete** - Delete a giveaway that have been made.\n**/g resume [messageId]** - Resume a paused giveaway.\n **/g pause [messageId]** - Pause active giveaways on the server.\n**/glist** - lists active giveaways on the server.\n\nDo not include <> nor [] - <> means required and [] means optional.`)
            .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL())
            .setTimestamp()
        await interaction.reply({ embeds: [statsembed],
        ephemeral: true 
       });
    }
}
