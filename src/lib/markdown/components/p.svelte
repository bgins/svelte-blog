<script>
  let { children } = $props()
</script>

<p>
  {@render children?.()}
</p>

<style>
  p {
    margin: 0;
  }
</style>
