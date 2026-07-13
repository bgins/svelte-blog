<script>
  import { icons } from '$lib/icons.js'

  /* one wrapper for every control glyph — pulls the fragment from the shared
   * registry so a glyph is defined once, and inherits colour via currentColor
   * so state and theming come from the parent, never hard-coded. */
  /** @type {{ name: keyof typeof icons, size?: number, title?: string }} */
  let { name, size = 19, title } = $props()
</script>

<svg
  class="ico-svg"
  width={size}
  height={size}
  viewBox="0 0 20 20"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  role="img"
  aria-label={title}
  aria-hidden={title ? undefined : true}
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- fragments come from the trusted static registry, never user input -->
  {@html icons[name]}
</svg>

<style>
  .ico-svg {
    display: block;
  }
</style>
