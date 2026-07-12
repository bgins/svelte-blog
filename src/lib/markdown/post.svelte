<script module>
  export {
    a,
    blockquote,
    code,
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
  import Quincunx from '$lib/components/Quincunx.svelte'
  import { formatDate } from '$lib/utils'

  /**
   * @type {{
   *   title: string,
   *   description: string,
   *   published: string,
   *   image: string,
   *   imageAlt: string,
   *   imageAttribution?: string,
   *   children?: import('svelte').Snippet
   * }}
   */
  let { title, description, published, image, imageAlt, imageAttribution, children } = $props()
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
    <figure>
      <img src={image} alt={imageAlt} />
      {#if imageAttribution}
        <figcaption>fig. — {imageAttribution}</figcaption>
      {/if}
    </figure>
  </div>

  <div id="content">
    {@render children?.()}
  </div>

  <div id="tailpiece">
    <Quincunx />
  </div>
</div>

<style>
  #layout {
    box-sizing: border-box;
    width: 100%;
    max-width: calc(38rem + 60px);
    padding: 40px 30px;
  }

  #heading {
    padding-bottom: 18px;
  }

  #heading > h1 {
    margin: 0;
    padding: 0;

    font-family: var(--font-display);
    font-weight: 500;
    font-size: 34px;
    line-height: 1.2;
  }

  #heading > #published {
    padding-top: 10px;

    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-variant-numeric: tabular-nums;
    color: var(--ink-faint);
  }

  #heading > figure {
    margin: 25px 0 0;
    padding: 10px;
    box-shadow: inset 0 0 0 1px var(--hairline-strong);
  }

  #heading img {
    display: block;
    width: 100%;
  }

  #heading figcaption {
    padding-top: 8px;
    font-size: 14.5px;
    font-style: italic;
    color: var(--w-muted);
  }

  #content {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 18px;

    width: 100%;
  }

  /* the versal — a rubricated initial opens the post */
  #content > :global(p:first-of-type)::first-letter {
    -webkit-initial-letter: 3;
    initial-letter: 3;

    font-family: var(--font-display);
    font-weight: 500;
    font-style: normal;

    color: var(--rubric);
    margin-right: 0.14em;
  }

  @supports not ((initial-letter: 3) or (-webkit-initial-letter: 3)) {
    #content > :global(p:first-of-type)::first-letter {
      float: left;
      font-size: 3.1em;
      line-height: 0.85;
      padding-top: 0.08em;
      margin-right: 0.12em;
    }
  }

  /* the tailpiece — the quincunx closes the text */
  #tailpiece {
    display: flex;
    justify-content: center;
    padding: 30px 0 4px;
  }
</style>
