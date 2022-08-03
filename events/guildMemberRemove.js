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
      `Довиждане ${user.toString()}. Беше ни приятно да играем с вас!`
    )
    .setColor(client.botconfig.EmbedColor)
    .setThumbnail(
      user.user.displayAvatarURL({
        dynamic: true,
      })
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/982732954310705162/982733038020599808/goodbye-banner-once.gif"
    );
  client.channels.cache.get(client.botconfig.LeaveChannel).send(memberJoined);
};
