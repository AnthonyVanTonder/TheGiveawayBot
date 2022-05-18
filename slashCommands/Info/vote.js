const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "gvote",
  description: "Vote for the bot on Top.gg!",
  toggleOff: false,
  run: async (client, interaction) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel(`Vote for ${client.user.username}`)
        .setStyle("LINK")
        .setURL(`https://top.gg/bot/${client.user.id}/vote`)
    );
    let vote = new MessageEmbed()
      .setAuthor(`Vote on Top.gg`, client.user.avatarURL())
      .setTitle("Vote Link!")
      .setDescription(
        `Every vote counts, if you like ${client.user} then help us by voting!`
      )
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(
        `Requested by ${interaction.user.tag} | ${client.user.username}`,
        interaction.user.displayAvatarURL()
      );
    interaction.reply({ embeds: [vote], components: [row] });
  },
};
