const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content.startsWith('ping!')) {
    message.reply('pong!');
  }
});

client.on('message', message => {
  if (message.content.startsWith('web!')) {
    message.channel.send('@everyone Visit https://teleovh.com/ for information about our services!');
  }
});

client.on('message', message => {
  if (message.content.startsWith('uptime!')) {
    message.channel.send('@everyone Go to https://status.teleovh.com/ to check our server uptime!');
  }
});

client.on('message', message => {
  if (message.content.startsWith('verification!')) {
    message.channel.send('Welcome to the server, please check your DMs for a message from the Server Captcha Bot to complete our verification process, thank you!');
  }
});

client.on('message', message => {
  if (message.content.startsWith('ticketsu!')) {
    message.channel.send('To create a ticket use the command ```?new ticket```');
  }
});

client.on('message', message => {
  if (message.content.startsWith(‘Hi’)) {
    message.channel.send(‘Hello.’);
  }
});

client.on('ready', () => {
   console.log('I am ready!'); 
});

client.login('NTY0MDQ3ODczMDM0MTU4MDgx.XLSuBQ.vO8BEykfOCDNxOroZybXMfvx52o');