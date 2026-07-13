<script>
  import Device from '$lib/components/Device.svelte'
  import ThemeToggle from '$lib/components/ThemeToggle.svelte'
</script>

<footer>
  <div id="inner">
    <div id="seal"><Device size={44} /></div>
    <nav>
      <a href="/feed.xml" target="_blank" rel="noopener noreferrer">feed</a>
      <span class="sep">·</span>
      <a href="https://github.com/bgins/svelte-blog" target="_blank" rel="noopener noreferrer">
        source
      </a>
    </nav>
    <ThemeToggle />
    <div id="set">set in Literata &amp; Geist Mono · Svelte · S3</div>
  </div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  #inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    width: 100%;
    max-width: calc(38rem + 60px);
    padding: 28px 30px 44px;
    box-shadow: inset 0 1px 0 var(--hairline);

    font-family: var(--font-mono);
    font-feature-settings:
      'ss01' on,
      'ss02' on;
    font-size: 12.5px;
    letter-spacing: 0.08em;
  }

  #seal {
    color: var(--ink-muted);
    padding-bottom: 4px;
  }

  nav {
    display: flex;
    gap: 10px;
  }

  nav > a {
    color: var(--ink-muted);
    text-decoration: none;
  }

  nav > a:hover {
    color: var(--rubric);
  }

  .sep {
    color: var(--ink-faint);
  }

  #set {
    font-family: var(--font-body);
    font-style: italic;
    font-size: 14px;
    letter-spacing: normal;
    color: var(--w-muted);
  }
</style>
