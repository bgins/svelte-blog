<script>
  let { children } = $props()
</script>

<h4>
  {@render children?.()}
</h4>

<style>
  h4 {
    margin: 0;
    padding-top: 0;

    font-family: var(--font-display);
    font-weight: 600;
    font-size: 19px;
  }
</style>
