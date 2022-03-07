const config = require('../../botconfig/config.json');
const {
    MessageEmbed
} = require('discord.js');
const ms = require("ms");

module.exports = {
    name: 'giveaway',
    description: 'Start a giveaway',
    cooldown: 0,
    userPermissions: ["MANAGE_MESSAGES"],
    botPermissions: ["MANAGE_MESSAGES"],
    // toggleOff: true,
    options: [{
            name: "start",
            description: "Start a giveaway",
            type: "SUB_COMMAND",
            options: [{
                    name: "duration",
                    description: "How long the giveaway should last for. Example values: 1m, 1h, 1d, 1w",
                    type: "STRING",
                    required: true
                },
                {
                    name: "winners",
                    description: "How many winners the giveaway should have.",
                    type: "INTEGER",
                    required: true
                },
                {
                    name: "prize",
                    description: "What the prize of the giveaway should be.",
                    type: "STRING",
                    required: true
                },
                {
                    name: "channel",
                    description: "The channel to start the giveaway in.",
                    type: "CHANNEL",
                    required: true
                    //channelTypes: ["GUILD_TEXT"]
                }
            ]
        },
        {
            name: "edit",
            description: "Edit a giveaway",
            type: "SUB_COMMAND",
            options: [{
                    name: "message-id",
                    description: "The giveaway to edit (message ID)",
                    type: "STRING",
                    required: true
                }, 
                {
                    name: "duration",
                    description: "Setting time of mentioned giveaway. Eg. 1h sets the current giveaway to end after an hour!",
                    type: "STRING",
                    required: true
                },
                {
                    name: "winner",
                    description: "How many winners the giveaway should have.",
                    type: "INTEGER",
                    required: true
                },
                {
                    name: "prize",
                    description: "What the prize of the giveaway should be.",
                    type: "STRING",
                    required: true
                }
            ]
        }, {
            name: "end",
            description: "End an already running giveaway",
            type: "SUB_COMMAND",
            options: [{
                name: "message-id",
                description: "The giveaway to end (message ID or giveaway prize)",
                type: "STRING",
                required: true
            }]
        },
        {
            name: "pause",
            description: "Pause a giveaway",
            type: "SUB_COMMAND",
            options: [{
                name: "message-id",
                description: "The giveaway to pause (message ID or giveaway prize).",
                type: "STRING",
                required: true
            }]
        },
        {
            name: "resume",
            description: "Resume a paused giveaway",
            type: "SUB_COMMAND",
            options: [{
                name: "message-id",
                description: "The giveaway to resume (message ID or giveaway prize)",
                type: "STRING",
                required: true
            }]
        },
        {
            name: "reroll",
            description: "Reroll a giveaway",
            type: "SUB_COMMAND",
            options: [{
                name: "message-id",
                description: "The giveaway to reroll (message ID or prize)",
                type: "STRING",
                required: true
            }]
        },
        {
            name: "delete",
            description: "Delete a giveaway",
            type: "SUB_COMMAND",
            options: [{
                name: "message-id",
                description: "The giveaway to delete (message ID or giveaway prize)",
                type: "STRING",
                required: true
            }]
        },
    ],

    run: async (client, interaction, args, ee) => {
        const {
            options
        } = interaction;

        const Sub = options.getSubcommand();

        const errorEmbed = new MessageEmbed()
            .setColor(ee.wrongcolor)

        const successEmbed = new MessageEmbed()
            .setColor(ee.color)

        switch (Sub) {
            case "start": {
                const gchannel = options.getChannel("channel") || interaction.channel;
                const duration = options.getString("duration");
                const winnerCount = options.getInteger("winners");
                const prize = options.getString("prize");

                client.giveawaysManager.start(gchannel, {
                    duration: ms(duration),
                    winnerCount,
                    prize: `${client.allEmojis.giveaway.drop} ${prize} ${client.allEmojis.giveaway.drop}`,
                    hostedBy: interaction.user || null,
                    thumbnail: interaction.guild.iconURL({ dynamic: true }) || null,
                    messages: {
                        giveaway: `${client.allEmojis.giveaway.react} **GIVEAWAY STARTED** ${client.allEmojis.giveaway.react}`,
                        giveawayEnded: `${client.allEmojis.giveaway.react} **GIVEAWAY ENDED** ${client.allEmojis.giveaway.react}`,
                        drawing: `Ends: {timestamp}`,
                        // timeRemaining: "Time remaining: **{duration}**!",
                        dropMessage: `Be the first to react with ${client.allEmojis.giveaway.react} !`,
                        inviteToParticipate: `React with ${client.allEmojis.giveaway.react} to participate!`,
                        winMessage: `Congratulations, {winners}! You won **{this.prize}**!`,
                        embedFooter: '{this.winnerCount} winner(s)',
                        noWinner: `Giveaway cancelled, no valid participations.`,
                        hostedBy: `Hosted By: {this.hostedBy}`,
                        winners: 'Winner(s):',
                        endedAt: 'Ended at',
                    },
                    lastChance: {
                        enabled: true,
                        content: '⚠️ **LAST CHANCE TO ENTER!** ⚠️',
                        threshold: 5000,
                        embedColor: '#FF0000'
                    }
                }).then(async () => {
                    successEmbed.setDescription("Giveaway was successfully started")
                    return interaction.reply({
                        embeds: [successEmbed],
                        ephemeral: true
                    });
                }).catch((err) => {
                    successEmbed.setDescription(`An Error has Occurred\n>>> ${err}`)
                    return interaction.reply({
                        embeds: [errorEmbed],
                        ephemeral: true
                    });
                })
            }
            break;
        case "edit": {
            const messageId = options.getString("message-id");
            const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageId);

            if (!giveaway) {
                errorEmbed.setDescription(`Unable to find the giveaway with the message id : ${messageId} in this guild.`);
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            }
            const duration = options.getString("duration");
            const newWinnerCount = options.getInteger("winners");
            const newPrize = options.getString("prize");

            client.giveawaysManager.edit(messageId, {
                addTime: ms(duration),
                newWinnerCount,
                newPrize: `${client.allEmojis.giveaway.drop} ${newPrize} ${client.allEmojis.giveaway.drop}`,
            }).then(async () => {
                successEmbed.setDescription("Giveaway was successfully updated")
                return interaction.reply({
                    embeds: [successEmbed],
                    ephemeral: true
                });
            }).catch((err) => {
                errorEmbed.setDescription(`An Error has Occurred\n>>> ${err}`)
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            })
        }
        break;
        case "end": {
            const messageId = options.getString("message-id");
            const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageId);

            if (!giveaway) {
                errorEmbed.setDescription(`Unable to find the giveaway with the message id : ${messageId} in this guild.`);
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            }

            client.giveawaysManager.end(messageId).then(() => {
                successEmbed.setDescription(`Giveaway has been Ended`)
                return interaction.reply({
                    embeds: [successEmbed],
                    ephemeral: true
                })
            }).catch((err) => {
                errorEmbed.setDescription(`An Error has Occurred\n>>> ${err}`)
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            });
        }
        break;
        case "pause": {
            const messageId = options.getString("message-id");
            const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageId);

            if (!giveaway) {
                errorEmbed.setDescription(`Unable to find the giveaway with the message id : ${messageId} in this guild.`);
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            }

            client.giveawaysManager.pause(messageId, {
                pauseOptions: {
                    isPaused: true,
                    content: '⚠️ **THIS GIVEAWAY IS PAUSED!** ⚠️',
                    unPauseAfter: null,
                    embedColor: '#FFFF00'
                }
            }).then(() => {
                successEmbed.setDescription(`Giveaway has been Paused`)
                return interaction.reply({
                    embeds: [successEmbed],
                    ephemeral: true
                })
            }).catch((err) => {
                errorEmbed.setDescription(`An Error has Occurred\n>>> ${err}`)
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            });
        }
        break;
        case "resume": {
            const messageId = options.getString("message-id");
            const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageId);

            if (!giveaway) {
                errorEmbed.setDescription(`Unable to find the giveaway with the message id : ${messageId} in this guild.`);
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            }

            client.giveawaysManager.unpause(messageId).then(() => {
                successEmbed.setDescription(`Giveaway has been Resumed`)
                return interaction.reply({
                    embeds: [successEmbed],
                    ephemeral: true
                })
            }).catch((err) => {
                errorEmbed.setDescription(`An Error has Occurred\n>>> ${err}`)
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            });
        }
        break;
        case "reroll": {
            const messageId = options.getString("message-id");
            const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageId);

            if (!giveaway) {
                errorEmbed.setDescription(`Unable to find the giveaway with the message id : ${messageId} in this guild.`);
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            }

            client.giveawaysManager.reroll(messageId, {
                messages: {
                    congrat: `New winner(s): {winners}! Congratulations, you won **{this.prize}**!`,
                    error: 'No valid participations, no new winner(s) can be chossen!'
                }
            }).then(() => {
                successEmbed.setDescription(`Giveaway has been Rerolled`)
                return interaction.reply({
                    embeds: [successEmbed],
                    ephemeral: true
                })
            }).catch((err) => {
                errorEmbed.setDescription(`An Error has Occurred\n>>> ${err}`)
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            });
        }
        break;
        case "delete": {
            const messageId = options.getString("message-id");
            const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageId);

            if (!giveaway) {
                errorEmbed.setDescription(`Unable to find the giveaway with the message id : ${messageId} in this guild.`);
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            }

            client.giveawaysManager.delete(messageId).then(() => {
                successEmbed.setDescription(`Giveaway has been Deleted`)
                return interaction.reply({
                    embeds: [successEmbed],
                    ephemeral: true
                })
            }).catch((err) => {
                errorEmbed.setDescription(`An Error has Occurred\n>>> ${err}`)
                return interaction.reply({
                    embeds: [errorEmbed],
                    ephemeral: true
                });
            });
        }
        break;
        }
    }
}