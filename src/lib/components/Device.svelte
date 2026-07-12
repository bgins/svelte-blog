<script>
  import { MONOGRAM_PATH, MONOGRAM_VIEWBOX } from '$lib/components/monogram.js'

  /** @type {{ size?: number }} */
  let { size = 300 } = $props()
</script>

<svg viewBox={MONOGRAM_VIEWBOX} width={size} height={size} aria-hidden="true">
  <path d={MONOGRAM_PATH} fill="currentColor" fill-rule="evenodd" />
</svg>

<style>
  svg {
    display: block;
  }
</style>
