<script>
  /** @type {{ src: string, alt: string }} */
  let { src, alt } = $props()
</script>

<img {src} {alt} />

<style>
  img {
    width: 100%;
  }
</style>
