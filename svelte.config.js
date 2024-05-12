// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: {
        page: './src/lib/markdown/page.svelte',
        post: './src/lib/markdown/post.svelte',
        _: './src/lib/markdown/page.svelte'
      }
    })
  ],

  extensions: ['.svelte', '.md'],

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
}

export default config
