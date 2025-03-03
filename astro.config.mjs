// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import preact from '@astrojs/preact'

import icon from 'astro-icon'

import favicons from 'astro-favicons'
import { readFile } from 'fs/promises'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		icon(),
		preact({ compat: true, devtools: true }),
		favicons({
			input: {
				favicons: [await readFile('src/assets/hero.png')],
			},
			name: 'henior',
			short_name: 'henior',
		}),
	],
})
