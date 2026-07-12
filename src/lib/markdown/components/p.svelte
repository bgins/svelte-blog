<script>
  let { children } = $props()
</script>

<p>
  {@render children?.()}
</p>

<style>
  p {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-variant: normal;
    font-size: 18px;
    line-height: 23px;
  }
</style>
