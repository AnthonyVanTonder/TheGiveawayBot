# [TheGiveawayBot](https://thegiveawaybot.wordpress.com/)

![Maintenance](https://img.shields.io/maintenance/yes/2022?style=plastic)
![GitHub package.json version](https://img.shields.io/github/package-json/v/AnthonyVanTonder/TheGiveawayBot)
![GitHub repo size](https://img.shields.io/github/repo-size/AnthonyVanTonder/TheGiveawayBot)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/AnthonyVanTonder/TheGiveawayBot/discord.js)
![Discord Support](https://img.shields.io/discord/889487066440818690?label=Discord%20Support&labelColor=FFFFF&style=plastic&logo=Discord&link=https://discord.gg/ZAzGRFTv59&link=https://discord.gg/ZAzGRFTv59)
[![Run on Repl.it](https://repl.it/badge/github/AnthonyVanTonder/TheGiveawayBot)](https://repl.it/github/AnthonyVanTonder/TheGiveawayBot)
[![Contributors](https://img.shields.io/github/contributors/AnthonyVanTonder/TheGiveawayBot?label=Contributors&color=yellow)](https://github.com/AnthonyVanTonder/TheGiveawayBot/graphs/contributors)
[![LICENSE](https://img.shields.io/github/license/AnthonyVanTonder/TheGiveawayBot?label=License&color=blueviolet)](https://github.com/AnthonyVanTonder/TheGiveawayBot/blob/main/LICENSE)

Hold giveaways quickly and easily on your Discord server!

![Example](https://i.imgur.com/pAnTFw4.jpg)

# Invite
If you'd like to add **TheGiveawayBot** to your server, use the following link:<br>
🔗 **https://thegiveawaybot.wordpress.com/invite**

# Commands

```
TheGiveawayBot commands:

/about - shows info about the bot
/invite - shows how to invite the bot
/ping - checks the bot's latency
 /help - Shows you Help for TheGiveawayBot
/commands - View all the commands available to the bot!
/feedback [content] - Send me feedback. (can include bugs/problems)
/stats - Sends bot physical statistics.
/support - Gets a link to my support guild!

Giveaway:

/giveaway start [time] [winners] [prize] [#channel] - starts a giveaway (quick setup)
/giveaway end [messageId] - ends (picks a winner for) the specified or latest giveaway in the current channel.
/giveaway reroll [messageId] - re-rolls the specified or latest giveaway in the current channel.
/giveaway edit [messageId] - allows you do edit your giveaway that you have hosted.
/giveaway delete - Delete a giveaway that have been made.
/giveaway resume [messageId] - Resume a paused giveaway.
/giveaway pause [messageId] - Pause active giveaways on the server.
/giveaway-list - lists active giveaways on the server.

Do not include <> nor [] - <> means required and [] means optional.
```

# Installation | How to use the Handler

 **1.** Install [node.js v16+](https://nodejs.org/) or higher

 **2.** Download this repo and unzip it    |    or git clone it

 **3.** Install all of the packages with **`npm install`**     |  the important packages are   **`npm install discord.js enmap`**

 **4** Fill in the parameters, RIGHT in `config.json`!

 **5.** start the bot with **`npx node bot.js`**!

# Suggests, Bugs, Feature Requests
If you find bugs or would like to suggest features, join my bot development server here: https://discord.gg/ZAzGRFTv59

# Selfhosting

You may selfhost (AKA run your own instance of) this bot under the following circumstances:
- Your instance (referred to as a "clone") must be **private**.
    - As such, your clone must not be listed on any sort of public bot listing.
- You understand that no support will be provided to aid you in self-hosting.
- You agree to not submit any issues, features, or pull requests related to bugs exclusively related to self-hosting.
