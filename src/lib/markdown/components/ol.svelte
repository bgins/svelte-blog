<script>
  let { children } = $props()
</script>

<ol>
  {@render children?.()}
</ol>

<style>
  ol {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0;
    padding: 0 0 0 30px;

    list-style-position: outside;
  }
</style>
