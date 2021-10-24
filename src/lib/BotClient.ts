import { CLIENT_OPTIONS as CLIENT_OPTIONS_BASE } from '#utils/constants';
import { SapphireClient } from '@sapphire/framework';
import { mergeDefault } from '@sapphire/utilities';
import type { ClientOptions } from 'discord.js';

export class BotClient extends SapphireClient {

	public constructor(options?: ClientOptions) {
		// @ts-expect-error Type instantiation is excessively deep and possibly infinite. ts(2589)
		super(mergeDefault(CLIENT_OPTIONS_BASE, options));
	}

}
