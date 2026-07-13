<script>
  let { children } = $props()
</script>

<blockquote>
  <span class="g" aria-hidden="true">»</span>
  <div class="quote">
    {@render children?.()}
  </div>
</blockquote>

<style>
  blockquote {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;

    width: 100%;
    margin: 0;

    font-style: italic;
    font-size: 18px;
  }

  .g {
    font-size: 21px;
    font-weight: 600;
    font-style: normal;
    line-height: 1.4;

    color: var(--rubric);
    opacity: 0.55;
  }
</style>
