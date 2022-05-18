//Bot Coded by Anthony van Tonder Pleas Give Me Credits If Used Thank You

module.exports = {
  name: "gsupport",
  description: "Gets a link to my support guild!",
  toggleOff: false,
  run: async (client, interaction) => {
    interaction.reply({
      content: `Here's a link to my support server: https://discord.gg/rRzrmgm8c3`,
     ephemeral: true
    });
  },
};

//Bot Coded by Anthony van Tonder Pleas Give Me Credits If Used Thank You
