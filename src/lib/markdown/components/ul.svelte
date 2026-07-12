<script>
  let { children } = $props()
</script>

<ul>
  {@render children?.()}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0;
    padding: 0 0 0 15px;

    list-style-type: none;
    list-style-position: outside;
  }
</style>
