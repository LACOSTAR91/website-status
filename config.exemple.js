module.exports = {
    TOKEN: "TOKEN", // Put your bot token
    TIME: "30000", // Update ping time
    TIMEOUT: 5000, // Time to wait before say the site offline
    NODE_PORT: 8080, // Port for ping the node category
    SITE_PORT: 443, // Port for ping the site category
    offline_emoji: "<:offline_example:00000000000>", // Put your offline emoji
    online_emoji: "<:online_example:00000000000>", // Put your online emoji
    latency: { // The message at default for wait the latency
        1: "\u200b",
        2: "\u200b",
        3: "\u200b",
        4: "\u200b", 
        5: "\u200b", 
        6: "\u200b", 
        7: "\u200b", 
    },
    emoji_status_loading: { // The loading emoji for wait the reponse of the ping
        1: "<a:loading:848530458844725249>",
        2: "<a:loading:848530458844725249>",
        3: "<a:loading:848530458844725249>",
        4: "<a:loading:848530458844725249>", 
        5: "<a:loading:848530458844725249>", 
        6: "<a:loading:848530458844725249>", 
        7: "<a:loading:848530458844725249>", 
    },
    nodes: { // All IP to ping for watch the status
        1: "1.1.1.1", 
    }, 
    sites: { // All sites to ping for watch the status
        2: "discord.com",
        3: "yzzy-bot.online",
        4: "api.yzzy-bot.online",
        5: "cdn.yzzy-bot.online",
        6: "hastebin.yzzy-bot.online",
    },
}