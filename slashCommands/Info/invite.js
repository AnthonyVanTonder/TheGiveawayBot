//Bot Coded by Anthony van Tonder Pleas Give Me Credits If Used Thank You

module.exports = {
  name: "ginvite",
  description: "Invite the bot to your server!",
  toggleOff: false,
  run: async (client, interaction) => {
    interaction.reply({
      content: `š Hello! I'm TheGiveawayBot! I help to make giveaways quick and easy!
You can add me to your server with this link:\n\nš https://thegiveawaybot.vercel.app/invite.html \n\nCheck out my commands by typing \`/gcommands\``,
     ephemeral: true
    });
  },
};


//Bot Coded by Anthony van Tonder Pleas Give Me Credits If Used Thank You
