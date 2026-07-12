<script>
  import { page } from '$app/stores'
  import { formatDate } from '$lib/utils'

  /** @type {{ data: { posts: { slug: string, title: string, published: string }[] } }} */
  let { data } = $props()
</script>

<svelte:head>
  <title>Syntactic Overdrive</title>
  <meta name="description" content="A blog about programming and music" />
  <meta property="og:title" content="Syntactic Overdrive" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:description" content="A blog about programming and music" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Syntactic Overdrive" />
  <meta property="twitter:description" content="A blog about programming and music" />
</svelte:head>

<div id="layout">
  <h1>Blog</h1>
  <div id="content">
    {#each data.posts as post}
      <a href={post.slug}>
        <div class="entry">
          <h2>{post.title}</h2>
          <div class="published">{formatDate(post.published)}</div>
        </div>
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
    align-items: start;
    gap: 10px;
    padding-top: 20px;
  }

  a {
    width: 100%;
    color: inherit;
    text-decoration: none;
  }

  .entry {
    width: 100%;
    display: flex;
    box-sizing: content-box;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    padding: 10px;

    border-left: 4px solid transparent;
    transition: border-left ease-out 0.03s;
  }

  .entry:hover {
    border-left: 4px solid var(--rubric);
    transition: border-left ease-in 0.06s;
  }

  h1 {
    margin: 0;
    padding: 0 14px;

    font-family: var(--font-display);
    font-weight: 500;
    font-size: 34px;
    line-height: 1.2;
  }

  h2 {
    margin: 0;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 20px;
    line-height: 1.3;
  }

  .published {
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-variant-numeric: tabular-nums;
    color: var(--ink-faint);
  }
</style>
