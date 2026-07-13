<script module>
  export {
    a,
    blockquote,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    img,
    li,
    ol,
    p,
    ul
  } from '$lib/markdown/components'
</script>

<script>
  import { page } from '$app/stores'
  import Hero from '$lib/components/Hero.svelte'

  /** @type {{ title: string, description: string, hero?: boolean, children?: import('svelte').Snippet }} */
  let { title, description, hero = false, children } = $props()
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={`${import.meta.env.VITE_ORIGIN}/images/og.png`} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={`${import.meta.env.VITE_ORIGIN}/images/og.png`} />
</svelte:head>

<div id="layout">
  {#if hero}
    <Hero />
  {/if}
  <h1 class:below-hero={hero}>{title}</h1>

  <div id="content">
    {@render children?.()}
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
    gap: 18px;

    width: 100%;
  }

  #layout > h1 {
    margin: 0;
    padding-bottom: 16px;

    font-family: var(--font-display);
    font-weight: 500;
    font-size: 34px;
    line-height: 1.2;
  }

  #layout > h1.below-hero {
    padding-top: 26px;
  }
</style>
