var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    bot.setPresence ({
        game:{
            name: 'try owo help',
            type: '1',
        }
    });
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 3) == 'owo') {
        var args = message.substring(4).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // send a message to users who ping the bot
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: '\\*~ hai cutie :3 ~*!'
                });
            break;

            // respond to users, basically another ping
            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'vohiyo my ~kawaii~ desu chans XD :3'
                });
            break;

            // a classic help case
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Resident sleeper? not with me around desus ;P i\'m here to ~kawaii~ up the place! ^_^ \ntry these commands >3> \n\towo ping \n\towo hi'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

//bot.login(process.env.BOT_TOKEN);
