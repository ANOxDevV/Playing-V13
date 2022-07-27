const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [``];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(PLAYING, {
      type: "PLAYING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});


client.login("")
