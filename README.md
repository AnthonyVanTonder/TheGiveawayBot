# [TheGiveawayBot](https://thegiveawaybot.vercel.app)

![Maintenance](https://img.shields.io/maintenance/yes/2022?style=plastic)
![GitHub package.json version](https://img.shields.io/github/package-json/v/AnthonyVanTonder/TheGiveawayBot)
![GitHub repo size](https://img.shields.io/github/repo-size/AnthonyVanTonder/TheGiveawayBot)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/AnthonyVanTonder/TheGiveawayBot/discord.js)
![Discord Support](https://img.shields.io/discord/889487066440818690?label=Discord%20Support&labelColor=FFFFF&style=plastic&logo=Discord&link=https://discord.gg/ZAzGRFTv59&link=https://discord.gg/ZAzGRFTv59)
[![Run on Repl.it](https://repl.it/badge/github/AnthonyVanTonder/TheGiveawayBot)](https://repl.it/github/AnthonyVanTonder/TheGiveawayBot)
[![Contributors](https://img.shields.io/github/contributors/AnthonyVanTonder/TheGiveawayBot?label=Contributors&color=yellow)](https://github.com/AnthonyVanTonder/TheGiveawayBot/graphs/contributors)
[![LICENSE](https://img.shields.io/github/license/AnthonyVanTonder/TheGiveawayBot?label=License&color=blueviolet)](https://github.com/AnthonyVanTonder/TheGiveawayBot/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/AnthonyVanTonder/TheGiveawayBot.svg)](https://github.com/AnthonyVanTonder/TheGiveawayBot/stargazers)
[![CodeFactor](https://www.codefactor.io/repository/github/anthonyvantonder/thegiveawaybot/badge)](https://www.codefactor.io/repository/github/anthonyvantonder/thegiveawaybot)

Hold giveaways quickly and easily on your Discord server! Written In [Discord.js](https://discord.js.org) v13.5.0 and [Node.js](https://nodejs.org) v16.13.1

![Example](https://i.imgur.com/pAnTFw4.jpg)

# Invite
If you'd like to add **TheGiveawayBot** to your server, use the following link:<br>
🔗 **https://thegiveawaybot.vercel.app/invite.html**

# Usage

🎉 TheGiveawayBot commands:

- **/gabout** - shows info about the bot
- **/ginvite** - shows how to invite the bot
- **/gping** - checks the bot's latency
- **/ghelp** - Shows you Help for TheGiveawayBot
- **/gcommands** - View all the commands available to the bot!
- **/gfeedback** [content] - Send me feedback. (can include bugs/problems)
- **/gsupport** - Gets a link to my support guild!

Giveaway:

- **/g start [time] [winners] [prize] [#channel]** - starts a giveaway with the provided number of seconds. For example, /g start 30s 2 Steam Code #giveaway would start a 30-second giveaway for a Steam Code with 2 winners in the #giveaway channel! To use minutes/hours/days/weeks/months instead of seconds, simply include an "m", "h", or "d" in the time ~ 3m would be a would be a 3-minute giveaway.
- **/g end [messageId]** - ends the most recent giveaway in the current channel. If you want to end an older/more specific giveaway, use **/g end [messageId]**
- **/g reroll [messageId]** - picks a new winner from the latest giveaway. If you want to reroll an older giveaway, you can use **/g reroll [messageId]**
- **/g edit [messageId]** - allows you do edit your giveaway that you have hosted.
- **/g delete [messageId]** - Delete a giveaway that have been made.
- **/g resume [messageId]** - Resume a paused giveaway.
- **/g pause [messageId]** - Pause active giveaways on the server.
- **/glist** - lists all the currently-running giveaways on the server

Do not include <> nor [] - <> means required and [] means optional.

# Installation | How to use the Handler

 **1.** Install [node.js v16+](https://nodejs.org/) or higher

 **2.** Download this repo and unzip it    |    or git clone it

 **3.** Install all of the packages with **`npm install`**     |  the important packages are   **`npm install discord.js enmap`**

 **4** Fill in the parameters, RIGHT in `config.json`!

 **5.** start the bot with **`npx node bot.js`**!

# Suggests, Bugs, Feature Requests
If you find bugs or would like to suggest features, join my bot development server here: https://thegiveawaybot.vercel.app/support.html

# Self-Hosting
Self-hosting your own copy of this bot is not supported; the source code is provided here so users and other bot developers can see how the bot functions. No help will be provided for editing, compiling, or building any code in this repository, and any changes must be documented as per the [license](https://github.com/AnthonyVanTonder/TheGiveawayBot/blob/master/LICENSE).
