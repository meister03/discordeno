import type { Bot } from "../../bot.ts";

export type VanityUrl = {
  code?: string;
  uses: number;
};

/** Returns the code and uses of the vanity url for this server if it is enabled else `code` will be null. Requires the `MANAGE_GUILD` permission. */
export async function getVanityUrl(bot: Bot, guildId: bigint): Promise<VanityUrl> {
  return await bot.rest.runMethod<VanityUrl>(
    bot.rest,
    "GET",
    bot.constants.routes.GUILD_VANITY_URL(guildId),
  );
}
