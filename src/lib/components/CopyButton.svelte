<script>
  import Icon from '$lib/components/Icon.svelte'

  /** @type {{ text: string }} */
  let { text } = $props()

  let copied = $state(false)
  let strikes = $state(0)
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let timer

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      return
    }
    copied = true
    strikes += 1
    clearTimeout(timer)
    timer = setTimeout(() => (copied = false), 1200)
  }
</script>

<button class="copy" type="button" onclick={copy} aria-label={copied ? 'Copied' : 'Copy code'}>
  {#key strikes}
    {#if strikes > 0}
      <span class="pulse" aria-hidden="true"></span>
    {/if}
  {/key}
  <Icon name={copied ? 'done' : 'copy'} size={15} />
</button>

<style>
  .copy {
    position: absolute;
    top: 8px;
    right: 8px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 0;

    background: var(--bg-raised);
    color: var(--ink-faint);
    cursor: pointer;

    transition:
      color 0.12s ease,
      opacity 0.12s ease;
  }

  .copy:hover,
  .copy:focus-visible {
    color: var(--rubric);
  }

  .pulse {
    position: absolute;
    inset: 0;
    border: 1.5px solid var(--rubric);
    border-radius: 50%;
    pointer-events: none;

    animation: strike 0.55s ease-out forwards;
  }

  @keyframes strike {
    from {
      transform: scale(1);
      opacity: 0.6;
    }
    to {
      transform: scale(3);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pulse {
      animation: none;
      opacity: 0;
    }
  }
</style>
