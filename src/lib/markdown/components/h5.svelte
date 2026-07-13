<script>
  let { children } = $props()
</script>

<h5>
  {@render children?.()}
</h5>

<style>
  h5 {
    margin: 0;
    padding-top: 0;

    font-family: var(--font-display);
    font-weight: 600;
    font-size: 19px;
  }
</style>
