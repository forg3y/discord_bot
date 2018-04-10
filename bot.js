var Discord = require('discord.io');
// var logger = require('winston');

// Initializez Discord Bot
var bot = new Discord.Client();

bot.on('ready', () => {
	console.log('?');
});

bot.on('message', () => {
	// Our bot needs to know if it will execute a command
	// it will listen for messages that will start with 'o3o '
	if(message.substring(0,4) == 'o3o ') {
		var args = message.substring(1).split(' '); // might need to make (n) bigger?
		var cmd = args[0];

		args = args.splice(1);
		switch(cmd) {
			// owo ping
			case 'ping':
				bot.sendMessage({
					to:channelID,
					message: '*~ hai cuties :3 ~*'
				});
			break;
			// Just add more case commands!
		}
	}
});

bot.login(process.env.BOT_TOKEN);
