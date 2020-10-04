import 'module-alias/register';
import { BotClient } from '@lib/BotClient';
import { BOT_TOKEN, CLIENT_OPTIONS } from '@root/config';
import { floatPromise } from '@utils/utils';

const client = new BotClient(CLIENT_OPTIONS);

async function main() {
	await client.login(BOT_TOKEN);
}

floatPromise({ client }, main());

export const mainTest = () => 'this builds and pushes';
