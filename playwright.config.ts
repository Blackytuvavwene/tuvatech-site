import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
<<<<<<< HEAD
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
=======
	testDir: 'tests'
>>>>>>> 2b64401e2e8bb3ee9f9f4cd7d0663b51ad5e22c7
};

export default config;
