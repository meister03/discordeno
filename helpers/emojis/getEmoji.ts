import type { Bot } from "../../bot.ts";
import { Emoji } from "../../transformers/emoji.ts";
import { DiscordEmoji } from "../../types/discord.ts";

/**
 * Returns an emoji for the given guild and emoji Id.
 */
export async function getEmoji(bot: Bot, guildId: bigint, emojiId: bigint): Promise<Emoji> {
  const result = await bot.rest.runMethod<DiscordEmoji>(
    bot.rest,
    "GET",
    bot.constants.routes.GUILD_EMOJI(guildId, emojiId),
  );

  return bot.transformers.emoji(bot, result);
}
