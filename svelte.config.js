import adapter from '@sveltejs/adapter-auto'
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
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter()
  }
}

export default config
