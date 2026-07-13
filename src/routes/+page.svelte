<script>
  import { page } from '$app/stores'
  import { formatDate } from '$lib/utils'

  /** @type {{ data: { posts: { slug: string, title: string, published: string }[] } }} */
  let { data } = $props()

  // a flat list with the year attached, so a single loop can both draw the
  // year heads (on change) and index the rows for keyboard stepping
  const flat = $derived(
    data.posts.map(p => ({ ...p, year: new Date(Date.parse(p.published)).getUTCFullYear() }))
  )

  let cursor = $state(-1)
  /** @type {HTMLAnchorElement[]} */
  let rows = []

  /* j and k step through the index like a dial's detents. The key is latched
   * (repeat events are ignored) so a held key advances exactly one row. */
  /** @param {KeyboardEvent} e */
  function onkeydown(e) {
    if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return
    const t = e.target
    if (
      t instanceof HTMLElement &&
      (t.isContentEditable || t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')
    ) {
      return
    }

    if (e.key === 'j') {
      cursor = cursor < 0 ? 0 : Math.min(cursor + 1, flat.length - 1)
    } else if (e.key === 'k') {
      cursor = cursor < 0 ? flat.length - 1 : Math.max(cursor - 1, 0)
    } else {
      return
    }

    e.preventDefault()
    rows[cursor]?.focus()
  }
</script>

<svelte:window {onkeydown} />

<svelte:head>
  <title>Brian Ginsburg</title>
  <meta name="description" content="Building identity, authority, and mesh." />
  <meta property="og:title" content="Brian Ginsburg" />
  <meta property="og:url" content={`${import.meta.env.VITE_ORIGIN}${$page.url.pathname}`} />
  <meta property="og:description" content="Building identity, authority, and mesh." />
  <meta property="og:image" content={`${import.meta.env.VITE_ORIGIN}/images/og.png`} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:image" content={`${import.meta.env.VITE_ORIGIN}/images/og.png`} />
  <meta property="twitter:title" content="Brian Ginsburg" />
  <meta property="twitter:description" content="Building identity, authority, and mesh." />
</svelte:head>

<div id="layout">
  <h1>Blog</h1>
  <div id="content">
    {#each flat as post, i (post.slug)}
      {#if i === 0 || flat[i - 1].year !== post.year}
        <h2 class="year">{post.year}</h2>
      {/if}
      <a class="row" class:on={i === cursor} href={post.slug} bind:this={rows[i]}>
        <span class="marker" aria-hidden="true">▸</span>
        <span class="title">{post.title}</span>
        <span class="date">{formatDate(post.published)}</span>
      </a>
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

  .row:hover,
  .row:focus-visible,
  .row.on {
    box-shadow: inset 0 -1px 0 var(--hairline-strong);
  }

  .row:focus-visible {
    outline: none;
  }

  .marker {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--rubric);
    visibility: hidden;
  }

  .row:hover > .marker,
  .row:focus-visible > .marker,
  .row.on > .marker {
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
