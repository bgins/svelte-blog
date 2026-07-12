<script>
  import Icon from '$lib/components/Icon.svelte'

  /* Three detents: auto follows the system, day and night override it.
   * The override is stored in localStorage['theme'] and mirrored on
   * <html data-theme>; the pre-paint script in app.html reads the same key.
   * A hard cut, no crossfade — a switch, not a dimmer. */
  const modes = ['auto', 'day', 'night']

  let mode = $state('auto')
  let systemDark = $state(false)

  // the effective ground picks the glyph; the label names the mode
  const dark = $derived(mode === 'night' || (mode === 'auto' && systemDark))

  $effect(() => {
    const stored = localStorage.getItem('theme')
    mode = stored === 'day' || stored === 'night' ? stored : 'auto'

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    systemDark = mq.matches

    /** @param {MediaQueryListEvent} e */
    const onChange = e => (systemDark = e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  })

  function cycle() {
    mode = modes[(modes.indexOf(mode) + 1) % modes.length]
    if (mode === 'auto') {
      localStorage.removeItem('theme')
      delete document.documentElement.dataset.theme
    } else {
      localStorage.setItem('theme', mode)
      document.documentElement.dataset.theme = mode
    }
  }
</script>

<button class="theme" type="button" onclick={cycle} aria-label="Theme: {mode}. Change.">
  <Icon name={dark ? 'moon' : 'sun'} size={15} />
  <span class="label">{mode}</span>
</button>

<style>
  .theme {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;

    font-family: inherit;
    font-size: inherit;
    letter-spacing: inherit;
    color: var(--ink-muted);
  }

  .theme:hover {
    color: var(--rubric);
  }

  .label {
    min-width: 3ch;
    text-align: left;
  }
</style>
