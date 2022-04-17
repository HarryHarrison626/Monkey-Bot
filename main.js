const Discord = require('discord.js');

const client = new Discord.Client({intents: 32767})




client.once('ready', () => {
    console.log('I awaken.');
});

client.on('message', message =>{
    if(message.author.bot)
    return;

    if (message.mentions.users.has(client.user.id) && !message.author.bot) {
        message.reply(`I won't beat you to death. :)`)
        return
      };
});

client.login('ODg3MTA3ODE2NDg0MTQzMTk0.YT_ViQ.j4TQ2AEysvhHdmj500_X3oKgoGE');