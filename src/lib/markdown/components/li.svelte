<script>
  let { children } = $props()
</script>

<li>
  {@render children?.()}
</li>

<style>
  li {
    padding-left: 6px;
    font-size: 18px;
    line-height: 23px;
  }
</style>
