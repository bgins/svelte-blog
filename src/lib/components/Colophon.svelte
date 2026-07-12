<script>
  import Device from '$lib/components/Device.svelte'
</script>

<footer>
  <div id="inner">
    <div id="seal"><Device size={44} /></div>
    <div id="motto" aria-hidden="true">———</div>
    <div id="head">// colophon</div>
    <nav>
      <a href="/feed.xml">feed</a>
      <span class="sep">·</span>
      <a href="https://github.com/bgins/svelte-blog">source</a>
    </nav>
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
    color: var(--rubric);
    padding-bottom: 2px;
  }

  #motto {
    color: var(--w-faint);
  }

  #head {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--ink-muted);
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
