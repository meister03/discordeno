import { Bot } from "../../../bot.ts";
import { ScheduledEvent } from "../../../transformers/scheduledEvent.ts";
import { DiscordScheduledEvent } from "../../../types/discord.ts";

/** Get a guild scheduled event. */
export async function getScheduledEvent(
  bot: Bot,
  guildId: bigint,
  eventId: bigint,
  options?: { withUserCount?: boolean },
): Promise<ScheduledEvent> {
  const result = await bot.rest.runMethod<DiscordScheduledEvent>(
    bot.rest,
    "GET",
    bot.constants.routes.GUILD_SCHEDULED_EVENT(guildId, eventId, options?.withUserCount),
  );

  return bot.transformers.scheduledEvent(bot, result);
}
