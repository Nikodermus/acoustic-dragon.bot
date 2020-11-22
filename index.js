const discord = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
    if (msg.content === 'ping') {
        const { channel } = msg.member.voice;

        const connection = await channel.join();
        const dispatcher = connection.play(
            fs.createReadStream(path.resolve(__dirname, './test.ogg'))
        );

        msg.channel.send('Mwahahaha');

        dispatcher.on('finish', () => {
            channel.leave();
        });
    }
});

client.login('Nzc5ODUwNjk5NDg3NTc2MDk2.X7mijw.fO9DZJu3sac4fjcsfGMCzhfuycw');
