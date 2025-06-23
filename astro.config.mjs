// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

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
    favicons({
      input: {
        favicons: [await readFile('src/assets/hero.png')],
      },
      name: 'henior',
      short_name: 'henior',
      manifest: {
        display_override: ['browser'],
        start_url: '/',
      },
    }),
  ],
})
