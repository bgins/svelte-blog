<script>
  let { children } = $props()
</script>

<blockquote>
  {@render children?.()}
</blockquote>

<style>
  blockquote {
    width: 95%;
    margin: 0;
    padding: 10px 14px;
    background-color: var(--bg-raised);
    border-left: 4px solid var(--w-faint);
  }
</style>
