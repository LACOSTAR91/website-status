const { MessageEmbed, Client } = require('discord.js'), client = new Client(), tcpp = require('tcp-ping'), async = require('async'), config = require('./config'), nodes = require('./config').nodes, sites = require('./config').sites, status = require('./config').latency, emoji_status = require('./config').emoji_status_loading;
require('discord-buttons')(client);
const { MessageButton } = require('discord-buttons');
const yzzy_website = new MessageButton().setStyle('url').setLabel('YZZY website').setURL(`https://yzzy-bot.online`).setID('yzzy_website');
const yzzy_bot = new MessageButton().setStyle('url').setLabel('YZZY invitaton').setURL(`https://discord.com/api/oauth2/authorize?client_id=719881185064386644&permissions=8&scope=bot`).setID('yzzy_invite');
const yzzy_api = new MessageButton().setStyle('url').setLabel('YZZY api').setURL(`https://api.yzzy-bot.online`).setID('yzzy_api');

client.on('ready', async () => console.log(`${client.user.username} are ready !`) );

client.on("message", async (message) => {
    if(message.author.bot) return;
    const messageArray = message.content.split(" "), cmd = messageArray[0];
    if (cmd === `=status`) {   
        function createembed() {
            return embed = new MessageEmbed()
                .setColor("#000")
                .setTitle("Bot | Status")
                .setDescription(`${emoji_status[4]} **YZZY website:** ${status[4]}\n${emoji_status[6]} **CDN:** ${status[6]}\n${emoji_status[5]} **YZZY API:** ${status[5]}\n${emoji_status[7]} **YZZY hastebin:** ${status[7]}\n\n${emoji_status[3]} **E-mail support:** ${status[3]}\n`)
                .setFooter("YZZY Status | Rafraichissement toutes les 30 secondes")
                .setTimestamp();
        };
        message.channel.send('\u200b', { buttons: [yzzy_website, yzzy_bot, yzzy_api], embed: createembed(), })
        .then(function(m) {
            setInterval(() => {
                m.edit({ embed: createembed() });
                async.forEachOf(nodes, (value, key, callback) => {
                    tcpp.ping({ address: value, port: config.NODE_PORT, timeout: config.TIMEOUT,
                    }, function (err, data) {
                        if (data.max == undefined) { emoji_status[key] = `${config.offline_emoji}`; status[key] = `\u200b`; } else { emoji_status[key] = `${config.online_emoji}`; status[key] = `(${data.results[0].time.toFixed(0)} ms)`; };
                        m.edit({ embed: createembed() });
                    });
                });
                async.forEachOf(sites, (value, key, callback) => {
                    tcpp.ping({ address: value, port: config.SITE_PORT, timeout: config.TIMEOUT,
                    }, function (err, data) {
                        if (data.max == undefined) { emoji_status[key] = `${config.offline_emoji}`; status[key] = `\u200b`; } else { emoji_status[key] = `${config.online_emoji}`; status[key] = `(${data.results[0].time.toFixed(0)} ms)`; }
                        m.edit({ embed: createembed() });
                    });
                });
            }, config.TIME);
        });  
    };
});

client.login(config.TOKEN);