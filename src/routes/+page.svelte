<script>
  import { formatDate } from '$lib/utils'

  /**
   * @param {{ published: string; }} a
   * @param {{ published: string; }} b
   */
  function compareDates(a, b) {
    return Date.parse(b.published) - Date.parse(a.published)
  }

  async function loadManifest() {
    const res = await fetch('/manifest.json')
    const manifest = await res.json()

    return manifest
      .sort(compareDates)
      .filter((/** @type {{ draft: boolean; }} */ post) => post.draft === false)
  }

  const promise = loadManifest()
</script>

<div id="layout">
  <h1>Blog</h1>
  <div id="content">
    {#await promise then posts}
      {#each posts as post}
        <a href={post.slug} data-sveltekit-preload-data>
          <div class="entry">
            <h2>{post.title}</h2>
            <div class="published">{formatDate(post.published)}</div>
          </div>
        </a>
      {/each}
    {/await}
  </div>
</div>

<style>
  #layout {
    box-sizing: border-box;
    width: 100%;
    max-width: 800px;
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
    color: #000000;
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
    border-left: 4px solid #8f192fbf;
    transition: border-left ease-in 0.06s;
  }

  h1,
  h2 {
    font-family: 'Rosario', sans-serif;
    font-variant: normal;
    font-weight: bold;
  }

  h1 {
    margin: 0;
    padding: 0 14px;

    font-size: 36px;
    line-height: 36px;
    letter-spacing: -0.5px;
  }

  h2 {
    margin: 0;
    font-size: 28px;
    letter-spacing: -0.5px;
  }

  .published {
    color: #00000099;
  }
</style>
