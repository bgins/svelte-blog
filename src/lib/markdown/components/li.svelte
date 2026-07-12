<script>
  let { children } = $props()
</script>

<li>
  {@render children?.()}
</li>

<style>
  li {
    padding-left: 6px;
  }
</style>
