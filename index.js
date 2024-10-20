const { Client, GatewayIntentBits } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const CLIENT_ID = 'your_client_id'; //  Client ID bot
const GUILD_ID = 'your_server_id'; //   ID server
const TOKEN = 'your_bot_token'; //  token 

const rest = new REST({ version: '9' }).setToken(TOKEN);


rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);


rest.put(Routes.applicationCommands(CLIENT_ID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);


client.login(TOKEN);
