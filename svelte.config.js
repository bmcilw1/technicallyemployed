import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
};

export default config;
