<script>
  let { children } = $props()
</script>

<h1>
  {@render children?.()}
</h1>

<style>
  h1 {
    margin: 0;

    font-family: var(--font-display);
    font-weight: 500;
    font-size: 34px;
    line-height: 1.2;
  }
</style>
