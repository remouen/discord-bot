const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  once: true,
  execute(msg) {
    console.log(msg);
    if (msg.content === "hey") {
      msg.reply("hi there");
      msg.channel.send("nah");
    }
  },
};
