import type { Bot } from "../../bot.ts";

/** Ban a user from the guild and optionally delete previous messages sent by the user. Requires the BAN_MEMBERS permission. */
export async function banMember(bot: Bot, guildId: bigint, id: bigint, options?: CreateGuildBan): Promise<void> {
  return await bot.rest.runMethod<void>(
    bot.rest,
    "PUT",
    bot.constants.routes.GUILD_BAN(guildId, id),
    {
      delete_message_seconds: options?.deleteMessageSeconds,
      reason: options?.reason,
    },
  );
}

/** https://discord.com/developers/docs/resources/guild#create-guild-ban */
export interface CreateGuildBan {
  /** Number of seconds to delete messages for, between 0 and 604800 (7 days) */
  deleteMessageSeconds?: number;
  /** Reason for the ban */
  reason?: string;
}
