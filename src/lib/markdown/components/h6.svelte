<script>
  let { children } = $props()
</script>

<h6>
  {@render children?.()}
</h6>

<style>
  h6 {
    margin: 0;
    padding-top: 0;

    font-family: var(--font-display);
    font-weight: 600;
    font-size: 19px;
  }
</style>
