<script>
  let { children } = $props()
</script>

<code>
  {@render children?.()}
</code>

<style>
  code {
    padding: 0px 4px;
    font-size: 15px;
    background-color: var(--bg-raised);
    box-shadow: inset 0 0 0 1px var(--hairline);
  }
</style>
