<script>
  import { page } from '$app/stores'

  const links = [
    { href: '/', label: 'blog' },
    { href: '/projects', label: 'projects' },
    { href: '/about', label: 'about' }
  ]

  /**
   * @param {string} href
   * @param {string} pathname
   */
  function isActive(href, pathname) {
    if (href === '/') return pathname === '/' || pathname.startsWith('/posts')
    return pathname.startsWith(href)
  }
</script>

<header>
  <div id="content">
    <a id="brand" href="/"><span class="c">::</span> bgins <span class="c">::</span></a>
    <nav>
      {#each links as link}
        <a class="link" class:active={isActive(link.href, $page.url.pathname)} href={link.href}>
          {link.label}
        </a>
      {/each}
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

  #brand {
    display: flex;
    align-items: center;
    gap: 0.45em;

    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.15em;

    color: var(--ink);
    text-decoration: none;
  }

  #brand > .c {
    color: var(--rubric);
  }

  nav {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: end;

    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  .link {
    color: var(--ink-muted);
    text-decoration: none;
  }

  .link:hover {
    color: var(--ink);
  }

  .link.active {
    color: var(--ink);
  }

  .link.active::before {
    content: '▸ ';
    color: var(--rubric);
  }
</style>
