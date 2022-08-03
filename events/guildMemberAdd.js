const { DiscordMusicBot } = require("../structures/DiscordMusicBot");
const { GuildMember, MessageEmbed } = require("discord.js");

/**
 * @param {DiscordMusicBot} client
 * @param {GuildMember} user
 *
 */

module.exports = (client, user) => {
  let memberJoined = new MessageEmbed()
    .setDescription(
      `**Здравейте ${user.toString()}!\nДобре дошли в нашият сървър. Надяваме се тук да ви хареса.\nЦелият екип Ви пожелава приятен престой!**`
    )
    .setColor(client.botconfig.EmbedColor)
    .setThumbnail(
      user.user.displayAvatarURL({
        dynamic: true,
        format: "jpeg",
      })
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/982732954310705162/982732994689253386/welcome-banner-final-once.gif"
    );
  // try {
  //      user.roles.add(client.botconfig.Role);
  // } catch (e) {
  //      console.log(e);
  // }
  client.channels.cache.get(client.botconfig.JoinChannel).send(memberJoined);
};
