/* eslint-disable @typescript-eslint/naming-convention */
export const DEV = 'DEV' in process.env ? process.env.DEV === 'true' : !('PM2_HOME' in process.env);

export const BOT_TOKEN = '';

export const TOKENS = {
	BOT_TOKEN
};
