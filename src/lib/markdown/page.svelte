<script context="module">
  import {
    a,
    blockquote,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    img,
    li,
    ol,
    p,
    ul
  } from '$lib/markdown/components'
  export { a, blockquote, h1, h2, h3, h4, h5, h6, img, li, ol, p, ul }
</script>

<script>
  import { page } from '$app/stores'

  /**
   * Page title
   * @type {String}
   */
  export let title
  /**
   * Page description
   * @type {String}
   */
  export let description
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:description" content={description} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
</svelte:head>

<div id="layout">
  <h1>{title}</h1>

  <div id="content">
    <slot></slot>
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
    gap: 18px;

    width: 100%;
  }

  #layout > h1 {
    margin: 0;
    padding-bottom: 16px;

    font-family: 'Rosario', sans-serif;
    font-variant: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: -0.5px;
  }
</style>
