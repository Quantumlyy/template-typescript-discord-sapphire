import { BotClient } from '@lib/BotClient';
import { Events } from '@sapphire/framework';
import { isThenable } from '@sapphire/utilities';

/**
 * @copyright 2019-2020 Antonio Román
 * @license Apache-2.0
 */
export function floatPromise(ctx: { client: BotClient }, promise: Promise<unknown>) {
	if (isThenable(promise)) promise.catch(error => ctx.client.emit(Events.Error, error));
}
