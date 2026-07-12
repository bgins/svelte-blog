/* Build the blog index at prerender time from post frontmatter.
 *
 * mdsvex exposes frontmatter as a `metadata` export on each +page.md module,
 * so the index prerenders into the page instead of being fetched from
 * /manifest.json after hydration. The manifest script remains solely as
 * input for the RSS feed.
 */
export function load() {
  const modules = import.meta.glob('./posts/*/+page.md', { eager: true })

  const posts = Object.entries(modules)
    .map(([path, module]) => {
      const { metadata } =
        /** @type {{ metadata: { title: string, published: string, draft: boolean } }} */ (module)

      return {
        slug: path.replace('./posts', '/posts').replace('/+page.md', ''),
        title: metadata.title,
        published: metadata.published,
        draft: metadata.draft
      }
    })
    .filter(post => post.draft === false)
    .sort((a, b) => Date.parse(b.published) - Date.parse(a.published))
    .map(({ slug, title, published }) => ({ slug, title, published }))

  return { posts }
}
