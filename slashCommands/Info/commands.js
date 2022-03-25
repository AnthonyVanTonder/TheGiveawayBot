//Bot Coded by AnthonyVTdev Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'info-commands',
   description: 'View all the commands available to the bot!',
   run: async(client, interaction) => {

      let statsembed = new MessageEmbed()
         .setColor("#FF4900")
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setTitle("TheGiveawayBot Commands Menu")
            .setURL("https://thegiveawaybot.wordpress.com/")
            .setImage(`https://th.bing.com/th/id/R.8ed86edb03d994d8d72b007cd816da53?rik=KazBFcLLg53rcw&riu=http%3a%2f%2fwww.willbakeforbooks.com%2fwp-content%2fuploads%2f2015%2f04%2fgiveaway.jpg&ehk=DwX1GSlXH0WhNHRy2HtROaJGhbXDFi8C58YfJm7Twjg%3d&risl=&pid=ImgRaw&r=0`)
            .setDescription(`\n\n**Here are the general bot commands:**\n\n\`/info-help\` - Shows you Help for TGB\n\`/info-commands\` - View all the commands available to the bot!\n\`/info-invite\` - Invite the bot to your server!\n\`/info-ping\` - Check the bot’s websocket latency!\n\`/info-stats\` - Sends bot physical statistics.\n\`/info-feedback\` - Send me feedback (can include bugs/problems)\n\`/info-about\` - Shows info about the bot.\n\n**Here are the giveaway bot commands:**\n\n\`/giveaway start\` - Start a giveaway\n\`‎/giveaway end\` - End an already running giveaway\n\`/giveaway reroll\` - Reroll a giveaway\n\`/giveaway edit\` - Edit a giveaway\n\`/giveaway delete\` - Delete a giveaway\n\`/giveaway resume\` - Resume a paused giveaway\n\`/giveaway pause\` - Pause a giveaway\n\n`)
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
            .setTimestamp()
        await interaction.reply({ embeds: [statsembed] });
    }
}

//Bot Coded by AnthonyVTdev Give Me Credits If Used Thank You
