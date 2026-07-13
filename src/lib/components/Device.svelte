<script>
  /* The mark as an impression: the original raster's alpha (soft edges and
   * all, extracted to static/monogram-grit.png) tinted by currentColor.
   * The traced vector (monogram.js) stays for the tiny geometric duties —
   * favicon and construction contexts — where grit would read as noise. */
  /** @type {{ size?: number }} */
  let { size = 300 } = $props()
</script>

<div class="device" style:width="{size}px" style:height="{size}px" aria-hidden="true"></div>

<style>
  .device {
    background-color: currentColor;
    -webkit-mask: url('/monogram-grit.png') center / contain no-repeat;
    mask: url('/monogram-grit.png') center / contain no-repeat;
  }
</style>
