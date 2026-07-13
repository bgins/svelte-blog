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

  /** @type {{ title: string, description: string, hero?: boolean, motto?: string, children?: import('svelte').Snippet }} */
  let { title, description, hero = false, motto = '', children } = $props()
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

<div id="layout" class:has-motto={motto}>
  {#if hero}
    <Hero />
  {/if}
  <h1 class:below-hero={hero}>{title}</h1>

  <div id="content">
    {@render children?.()}
  </div>

  {#if motto}
    <p class="motto">{motto}</p>
  {/if}
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

  /* a faint motto that hugs just above the footer divider at any window
   * height: the page becomes a flex column filling the viewport, and the
   * motto is pushed to its foot with margin-top auto, then pulled the last
   * few pixels into the footer's top gap */
  #layout.has-motto {
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }

  .motto {
    margin: auto 0 -40px;
    text-align: center;

    font-family: var(--font-body);
    font-style: italic;
    font-size: 16px;
    letter-spacing: 0.03em;
    color: var(--w-faint);
  }
</style>
