//Bot Coded by Anthony van Tonder Give Me Credits If Used Thank You

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'info-feedback',
    description: 'Send me feedback (can include bugs/problems)',

    options: [
        {
            name: 'content',
            description: 'What feedback to send',
            type: 'STRING',
            required: true
        }
    ],

    run: async (client, interaction) => {
      const feedback = interaction.options.getString('content');
      const channel = client.channels.cache.get('914542398724509789');
      const fembed = new MessageEmbed()
      .setTitle(`Feedback sent`)
      .setColor('RANDOM')
      .setDescription('Your feedback has been sent to the Developer')
      .addFields(	
        {
					name: 'Content',
					value: `\`\`\`${feedback}\`\`\``
				}
  
      )
      .setTimestamp()
      .setFooter(`Requested by ${interaction.user.username} | Thanks For Using ${client.user.username}`, interaction.user.displayAvatarURL())
		interaction.reply({ embeds: [fembed] });

       const aembed = new MessageEmbed()
      .setTitle(`Feedback received`)
      .setColor('RANDOM')
      .addFields(	
        {
					name: 'Content',
					value: `\`\`\`${feedback}\`\`\``
				},
        {
					name: 'Sent by',
					value: `\`\`\`${interaction.user.tag}\`\`\``
				},
        {
					name: 'User ID',
					value: `\`\`\`${interaction.user.id}\`\`\``
				},
        {
					name: 'Server',
					value: `\`\`\`${interaction.guild.name}\`\`\``
				},
        {
					name: 'Server ID',
					value: `\`\`\`${interaction.guild.id}\`\`\``
				},
  
      )
      .setTimestamp()
      .setFooter(`Requested by ${interaction.user.username} | ${client.user.username}`, interaction.user.displayAvatarURL())
      channel.send({ embeds: [aembed] });
      
   }

};
