import type { Bot } from "../../bot.ts";

/** Delete a webhook permanently. Returns a undefined on success */
export async function deleteWebhookWithToken(bot: Bot, webhookId: bigint, webhookToken: string): Promise<void> {
  return await bot.rest.runMethod<void>(bot.rest, "DELETE", bot.constants.routes.WEBHOOK(webhookId, webhookToken));
}
