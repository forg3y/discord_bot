const Discord = require('discord.js');
// var logger = require('winston');

// Initializez Discord Bot
const bot = new Discord.Client();

bot.on('ready', () => {
	console.log('?');
});

bot.on('message', message => {
	// Our bot needs to know if it will execute a command
	// it will listen for messages that will start with 'o3o '
	/*if(message.substring(0,4) == 'o3o ') {
		var args = message.substring(1).split(' '); // might need to make (n) bigger?
		var cmd = args[0];

		args = args.splice(1);
		switch(cmd) {
			// owo ping
			case 'ping':
				message.reply('*~ hai cuties :3 ~*');
			break;
			// Just add more case commands!
		}
	}*/
	if (message.content === 'owo ping') {
		messge.reply('*~ hai cuties :3 ~*');
	}
});

bot.login(process.env.BOT_TOKEN);
