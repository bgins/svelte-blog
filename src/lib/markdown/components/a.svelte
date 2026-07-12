<script>
  /** @type {{ href: string, children?: import('svelte').Snippet }} */
  let { href, children } = $props()
</script>

<a {href} rel="noopener noreferrer" target="_blank">
  {@render children?.()}
</a>

<style>
  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: var(--rule-under);
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }

  a:hover {
    color: var(--rubric);
    text-decoration-color: currentColor;
  }
</style>
