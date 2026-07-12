<header>
  <div id="content">
    <div id="brand">
      <a class="link" href="/">Syntactic Overdrive</a>
    </div>
    <nav>
      <a class="link" href="/">Blog</a>
      <a class="link" href="/projects">Projects</a>
      <a class="link" href="/about">About</a>
    </nav>
  </div>
</header>

<style>
  header {
    box-shadow: inset 0 -1px 0 var(--hairline-strong);
  }

  header > #content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 22px 25px 18px 25px;

    font-family: var(--font-mono);
    font-feature-settings:
      'ss01' on,
      'ss02' on;
  }

  header > #content > #brand {
    display: flex;
    align-items: center;

    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  header > #content > nav {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: end;

    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.08em;
  }

  .link {
    color: var(--ink);
    text-decoration: none;
  }

  nav > .link {
    color: var(--ink-muted);
  }

  nav > .link:hover {
    color: var(--ink);
  }
</style>
