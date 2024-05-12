<script>
  /**
   * Link URL
   * @type {String}
   */
  export let href;
</script>

<a {href} rel="noopener noreferrer" target="_blank">
  <slot />
</a>

<style>
  a {
    color: #8e182e;
    text-decoration: none;
  }
</style>
