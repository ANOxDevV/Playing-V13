const { Client, Collection } = require("discord.js");

const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS",
    "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});
module.exports = client;
client.commands = new Collection();
//////////coded by ANO

client.on('ready', () => {
    client.user.setActivity(`ANOxDevV`,{ type: 'PLAYING' });
})
//////////coded by ANO

client.on("ready", () => {
  var join = client.channels.get(""); /// id voice
  if (join) join.join();
});


//////ANOxDevV
client.login("MTAwMTk3MTIwMzQ3MDI3NDY1MQ.GkhyHa._6NaDbuRbQqxTF39OsdwMdRa3TGXNUAPBL5els");
