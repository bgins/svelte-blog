<script>
  let { children } = $props()
</script>

<h3>
  {@render children?.()}
</h3>

<style>
  h3 {
    margin: 0;
    padding-top: 0;

    font-family: var(--font-display);
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
  }
</style>
