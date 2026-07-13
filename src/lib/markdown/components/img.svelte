<script>
  /** @type {{ src: string, alt: string }} */
  let { src, alt } = $props()
</script>

<figure>
  <img {src} {alt} />
  {#if alt}
    <figcaption aria-hidden="true">fig. — {alt}</figcaption>
  {/if}
</figure>

<style>
  figure {
    width: 100%;
    margin: 0;
    padding: 10px;
    box-shadow: inset 0 0 0 1px var(--hairline-strong);
  }

  img {
    display: block;
    width: 100%;
  }

  figcaption {
    padding-top: 8px;

    font-style: italic;
    font-size: 14.5px;
    color: var(--w-muted);
  }
</style>
