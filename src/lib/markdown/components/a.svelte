<script>
  /** @type {{ href: string, children?: import('svelte').Snippet }} */
  let { href, children } = $props()

  // only off-site links open in a new tab; a scheme or protocol-relative // marks one
  const external = $derived(/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//'))
</script>

<a
  {href}
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
>
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
