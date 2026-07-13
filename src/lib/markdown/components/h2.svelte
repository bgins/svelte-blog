<script>
  let { children } = $props()
</script>

<h2>
  {@render children?.()}
</h2>

<style>
  h2 {
    margin: 0;
    padding-top: 10px;

    font-family: var(--font-display);
    font-weight: 500;
    font-size: 26px;
    line-height: 1.25;
  }
</style>
