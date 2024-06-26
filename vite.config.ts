import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { searchForWorkspaceRoot } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), SvelteKitPWA()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom'
	},
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), './tailwind.config.js']
		}
	}
});
