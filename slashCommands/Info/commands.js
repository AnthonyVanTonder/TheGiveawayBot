//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'commands',
   description: 'View all the commands available to the bot!',
   run: async(client, interaction) => {

      let statsembed = new MessageEmbed()
         .setColor("#FF4900")
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setTitle("TheGiveawayBot Commands Menu")
            .setURL("https://thegiveawaybot.wordpress.com/")
            .setImage(`https://th.bing.com/th/id/R.8ed86edb03d994d8d72b007cd816da53?rik=KazBFcLLg53rcw&riu=http%3a%2f%2fwww.willbakeforbooks.com%2fwp-content%2fuploads%2f2015%2f04%2fgiveaway.jpg&ehk=DwX1GSlXH0WhNHRy2HtROaJGhbXDFi8C58YfJm7Twjg%3d&risl=&pid=ImgRaw&r=0`)
            .setDescription(`\n\n**Here are the Info commands:**\n\n\`/help\` - Shows you Help for TGB\n\`/commands\` - View all the commands available to the bot!\n\`/invite\` - Invite the bot to your server!\n\`/ping\` - Check the bot’s websocket latency!\n\`/stats\` - Sends bot physical statistics.\n\`/feedback\` - Send me feedback (can include bugs/problems)\n\`/about\` - Shows info about the bot.\n\`/vote\` - Vote For The Bot On Top.gg.\n\n**Here are the Giveaways commands:**\n\n\`/giveaway start\` - Start a giveaway\n\`‎/giveaway end\` - End an already running giveaway\n\`/giveaway reroll\` - Reroll a giveaway\n\`/giveaway edit\` - Edit a giveaway\n\`/giveaway delete\` - Delete a giveaway\n\`/giveaway resume\` - Resume a paused giveaway\n\`/giveaway pause\` - Pause a giveaway\n\`/giveaway-list\` - List all the active giveaways for this server.\n\n`)
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
            .setTimestamp()
        await interaction.reply({ embeds: [statsembed] });
    }
}
