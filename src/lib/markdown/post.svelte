<script context="module">
  import {
    a,
    blockquote,
    code,
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
  export { a, blockquote, code, h1, h2, h3, h4, h5, h6, img, li, ol, p, ul }
</script>

<script>
  import { page } from '$app/stores'
  import { formatDate } from '$lib/utils'

  /**
   * Post title
   * @type {String}
   */
  export let title

  /**
   * Post description
   * @type {String}
   */
  export let description

  /**
   * Published date
   * @type {String}
   */
  export let published

  /**
   * Heading image source
   * @type {String}
   */
  export let image

  /**
   * Heading image alt
   * @type {String}
   */
  export let imageAlt

  /**
   * Heading image attribution
   * @type {String}
   */
  export let imageAttribution
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:image" content={`${import.meta.env.VITE_ORIGIN}${image}`} />
  <meta property="og:image:secure_url" content={`${import.meta.env.VITE_ORIGIN}${image}`} />
  <meta property="og:image:alt" content={imageAlt} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:description" content={description} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={`${import.meta.env.VITE_ORIGIN}${image}`} />
  <meta property="twitter:image:alt" content={imageAlt} />
</svelte:head>

<div id="layout">
  <div id="heading">
    <h1>{title}</h1>
    <div id="published">{formatDate(published)}</div>
    <img src={image} alt={imageAlt} />
    {#if imageAttribution}
      <div id="attribution">{imageAttribution}</div>
    {/if}
  </div>

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

  #heading {
    padding-bottom: 18px;
  }

  #heading > h1 {
    margin: 0;
    padding: 0;

    font-family: 'Rosario', sans-serif;
    font-variant: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: -0.5px;
  }

  #heading > #published {
    padding-top: 10px;
    color: #00000099;
  }

  #heading > img {
    width: 100%;
    padding-top: 25px;
  }

  #heading > #attribution {
    padding-top: 7px;
    color: #00000080;
    font-style: italic;
  }

  #content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 18px;

    width: 100%;
  }
</style>
