var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings (? google logger settings)
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
	colorize: true
});
logger.level = 'debug';

// Initializez Discord Bot
var bot = new Discord.Client({
	token: auth.token,
	autorun: true
});
bot.on('ready', function(evt) {
	logger.info('Connected');
	logger.info('Logged inn as: ');
	logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function(user, userID, channelID, message, evt) {
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
})
