//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You

const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'info-ping',
    description: 'Check my ping!',
    run: async (client, interaction) => {
      let pembed = new MessageEmbed()
		  .setThumbnail(`${client.user.displayAvatarURL()}`)
      .setColor('RANDOM')	
			.setTitle('Client Ping')
			.addFields(
            {
                name: '**Latency**',
                value: `${Date.now() - interaction.createdTimestamp}ms` ,
                inline: true
            },
            {
                name: '**API Latency**',
                value: `${Math.round(client.ws.ping)}ms`,
                inline: true
            }
        )
.setTimestamp()        .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL());
        interaction.reply({
          embeds: [pembed]
        });
    },
};
