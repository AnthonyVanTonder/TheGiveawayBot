//Bot Coded by AnthonyVTdev Pleas Give Me Credits If Used Thank You

const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'info-ping',
    description: 'Check my ping!',
    run: async (client, interaction) => {
      let pembed = new MessageEmbed()
		  .setColor('RANDOM')	
			.setTitle('Client Ping')
			.addField('**Latency**', `\`${Date.now() - interaction.createdTimestamp}ms\``)
			.addField('**API Latency**', `\`${Math.round(client.ws.ping)}ms\``)
			.setTimestamp()
			.setFooter(`${interaction.user.username}`, interaction.user.avatarURL());
        interaction.reply({
          embeds: [pembed]
        });
    },
};
//Bot Coded by AnthonyVTdev Pleas Give Me Credits If Used Thank You