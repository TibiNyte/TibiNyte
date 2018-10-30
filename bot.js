const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
{ 
  "token"  : "NTA2NTQ1MjM0ODc3MDg3NzY1.Drjs9A.OoHpKSQwrEYvLK-0NORNoiD2bG0",
  "prefix" : ""
}
