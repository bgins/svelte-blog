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

    font-family: 'Rosario', sans-serif;
    font-variant: normal;
    font-weight: bold;
    font-size: 18px;
  }
</style>
