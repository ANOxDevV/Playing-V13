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

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [`ANOxDevV`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(PLAYING, {      
    type:"PLAYING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////////coded by ANO

client.on("ready", () => {
  var join = client.channels.get(""); /// id voice
  if (join) join.join();
});


//////ANOxDevV
client.login("MTAwMTk3MTIwMzQ3MDI3NDY1MQ.Gjpj2e.OEMbdCgSvTkGw6NBBClEggU20KpmoBroavxWu4");
