import type { Bot } from "../../bot.ts";
import { Channel } from "../../transformers/channel.ts";
import { DiscordChannel } from "../../types/discord.ts";

/** Get a user's dm channel. This is required in order to send a DM. */
export async function getDmChannel(bot: Bot, userId: bigint): Promise<Channel> {
  if (userId === bot.id) throw new Error(bot.constants.Errors.YOU_CAN_NOT_DM_THE_BOT_ITSELF);

  const result = await bot.rest.runMethod<DiscordChannel>(bot.rest, "POST", bot.constants.routes.USER_DM(), {
    recipient_id: userId.toString(),
  });

  return bot.transformers.channel(bot, { channel: result });
}
