// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// mdsvex >= 0.12 resolves relative layout paths against each markdown file
const root = dirname(fileURLToPath(import.meta.url))

// mdsvex >= 0.12 loads Prism language components with ESM dynamic import,
// which fails on Prism's CJS-only deep paths. Load them with require instead,
// reproducing the mdsvex default highlighter's output markup exactly.
const require = createRequire(import.meta.url)
const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/index.js')

const escapeSvelty = str =>
  str
    .replace(/[{}`]/g, c => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' })[c])
    .replace(/\\([trn])/g, '&#92;$1')

const escapeHtml = str =>
  str.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c])

function highlighter(code, lang) {
  if (lang && !Prism.languages[lang]) {
    try {
      loadLanguages([lang])
    } catch {
      // no grammar for this language (e.g. wit) — render it plain
    }
  }

  const grammar = lang && Prism.languages[lang]
  const highlighted = escapeSvelty(
    grammar ? Prism.highlight(code, grammar, lang) : escapeHtml(code)
  )

  return `<pre class="language-${lang}">{@html \`<code class="language-${lang}">${highlighted}</code>\`}</pre>`
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      highlight: { highlighter },
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
