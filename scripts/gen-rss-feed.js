import * as fs from 'node:fs'

function render(manifest) {
  // Generate entry for each published post
  let entries = manifest
    .filter(entry => entry.draft === false)
    .map(post => {
      return `<item>
<guid>https://brianginsburg.com${post.slug}</guid>
<title>${post.title}</title>
<link>https://www.brianginsburg.com${post.slug}</link>
<description>${post.description}</description>
<pubDate>${new Date(post.published).toUTCString()}</pubDate>
</item>
`
    })

  // Generate document
  let document = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="http://wwww.brianginsburg.com/rss" rel="self" type="application/rss+xml" />
<title>Brian Ginsburg</title>
<link>https://brianginsburg.com</link>
<description>A blog about progamming and music</description>
${entries.join('')}</channel>
</rss>`

  return document
}

// Load manifest and render RSS feed document
const data = fs.readFileSync('./static/manifest.json')
const manifest = JSON.parse(data)
const rss = render(manifest)

// Write document to disk
fs.writeFile('./static/feed.xml', rss, err => {
  if (err) {
    throw err
  }

  console.log('✅ Wrote RSS feed to static/rss.xml')
})
