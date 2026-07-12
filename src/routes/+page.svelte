<script>
  import { page } from '$app/stores'
  import Hero from '$lib/components/Hero.svelte'
  import { formatDate } from '$lib/utils'

  /** @type {{ data: { posts: { slug: string, title: string, published: string }[] } }} */
  let { data } = $props()

  // Group posts by year (UTC, matching formatDate) for the year heads
  const years = $derived.by(() => {
    /** @type {{ year: number, posts: typeof data.posts }[]} */
    const groups = []
    for (const post of data.posts) {
      const year = new Date(Date.parse(post.published)).getUTCFullYear()
      const group = groups.at(-1)
      if (group && group.year === year) group.posts.push(post)
      else groups.push({ year, posts: [post] })
    }
    return groups
  })
</script>

<svelte:head>
  <title>Syntactic Overdrive</title>
  <meta name="description" content="A blog about programming and music" />
  <meta property="og:title" content="Syntactic Overdrive" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:description" content="A blog about programming and music" />
  <meta property="og:image" content={`${import.meta.env.VITE_ORIGIN}/images/og.png`} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:image" content={`${import.meta.env.VITE_ORIGIN}/images/og.png`} />
  <meta property="twitter:title" content="Syntactic Overdrive" />
  <meta property="twitter:description" content="A blog about programming and music" />
</svelte:head>

<div id="layout">
  <Hero />
  <h1>Blog</h1>
  <div id="content">
    {#each years as group (group.year)}
      <h2 class="year">{group.year}</h2>
      {#each group.posts as post (post.slug)}
        <a class="row" href={post.slug}>
          <span class="marker" aria-hidden="true">▸</span>
          <span class="title">{post.title}</span>
          <span class="date">{formatDate(post.published)}</span>
        </a>
      {/each}
    {/each}
  </div>
</div>

<style>
  #layout {
    box-sizing: border-box;
    width: 100%;
    max-width: calc(38rem + 60px);
    padding: 40px 30px;
  }

  #content {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
  }

  h1 {
    margin: 0;
    padding-top: 26px;

    font-family: var(--font-display);
    font-weight: 500;
    font-size: 34px;
    line-height: 1.2;
  }

  .year {
    margin: 26px 0 4px;

    font-family: var(--font-mono);
    font-feature-settings:
      'ss01' on,
      'ss02' on;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.16em;
    color: var(--ink-muted);
  }

  .row {
    display: flex;
    align-items: baseline;
    gap: 10px;

    padding: 13px 0;
    box-shadow: inset 0 -1px 0 var(--hairline);

    color: inherit;
    text-decoration: none;
  }

  .marker {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--rubric);
    visibility: hidden;
  }

  .row:hover > .marker {
    visibility: visible;
  }

  .title {
    flex: 1;

    font-family: var(--font-body);
    font-weight: 600;
    font-size: 19px;
    line-height: 1.3;
  }

  .date {
    font-family: var(--font-mono);
    font-size: 12.5px;
    letter-spacing: 0.08em;
    font-variant-numeric: tabular-nums;
    color: var(--ink-faint);
    white-space: nowrap;
  }
</style>
