<script>
  /** @type {{ href: string, children?: import('svelte').Snippet }} */
  let { href, children } = $props()
</script>

<a {href} rel="noopener noreferrer" target="_blank">
  {@render children?.()}
</a>

<style>
  a {
    color: #8e182e;
    text-decoration: none;
  }
</style>
