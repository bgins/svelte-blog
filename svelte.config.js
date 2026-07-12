// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { createHighlighter } from 'shiki'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// mdsvex >= 0.12 resolves relative layout paths against each markdown file
const root = dirname(fileURLToPath(import.meta.url))

// Shiki with the Vitesse dual themes. Every token carries both palettes as
// CSS variables and the site theme decides which one shows (see styles.css).
const highlighter = await createHighlighter({
  themes: ['vitesse-light', 'vitesse-dark'],
  langs: [
    'javascript',
    'typescript',
    'python',
    'rust',
    'haskell',
    'elm',
    'json',
    'toml',
    'shellscript'
  ]
})

const escapeSvelte = str =>
  str.replace(/[{}`]/g, c => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' })[c])

function highlight(code, lang) {
  const options = {
    themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
    defaultColor: false
  }

  try {
    return escapeSvelte(highlighter.codeToHtml(code, { ...options, lang: lang ?? 'text' }))
  } catch {
    // no grammar for this language (e.g. wit) — render it plain
    return escapeSvelte(highlighter.codeToHtml(code, { ...options, lang: 'text' }))
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      highlight: { highlighter: highlight },
      layout: {
        page: join(root, 'src/lib/markdown/page.svelte'),
        post: join(root, 'src/lib/markdown/post.svelte'),
        _: join(root, 'src/lib/markdown/page.svelte')
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
