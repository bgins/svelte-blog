<script>
  import { page } from '$app/stores'

  const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']

  const projects = [
    {
      title: 'Coincident Spectra',
      image: 'coincident-spectra.png',
      alt: 'Screenshot of Coincident Spectra',
      description: 'An additive synthesizer for exploring coincident overtone tunings.',
      links: {
        external: 'https://coincident-spectra.brianginsburg.com/',
        post: null
      }
    },
    {
      title: 'Moon Forge',
      image: 'moon-forge.png',
      alt: 'Screenshot of Moon Forge',
      description:
        'Moon Forge is lunar instrument playground. One subtractive synth is implemented and more are planned.',
      links: {
        external: 'https://moon-forge.brianginsburg.com/',
        post: null
      }
    },
    {
      title: 'minima',
      image: 'minima.png',
      alt: 'Screenshot of minima',
      description: 'Minima is a minimalist music playground.',
      links: {
        external: 'https://minima.brianginsburg.com/',
        post: '/posts/minima'
      }
    },
    {
      title: 'Hebdomad',
      image: 'hebdomad.png',
      alt: 'Screenshot of Hebdomad',
      description:
        'Hebdomad is a subtractive synth for exploring heptatonic tunings. It comes with thirteen tunings and supports custom tunings.',
      links: {
        external: 'https://hebdomad.brianginsburg.com/',
        post: '/posts/hebdomad'
      }
    }
  ]
</script>

<svelte:head>
  <title>Projects | Syntactic Overdrive</title>
  <meta name="description" content="My projects" />
  <meta property="og:title" content="Projects" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:description" content="My projects" />
  <meta property="twitter:title" content="Projects" />
  <meta property="twitter:description" content="My projects" />
</svelte:head>

<div id="layout">
  <h1>Projects</h1>
  <div id="content">
    {#each projects as project, i (project.title)}
      <article class="plate">
        <figure>
          {#if project.links.external}
            <a href={project.links.external} target="_blank" rel="noopener noreferrer">
              <img src="/images/projects/{project.image}" alt={project.alt} />
            </a>
          {:else}
            <img src="/images/projects/{project.image}" alt={project.alt} />
          {/if}
          <figcaption>Tab. {numerals[i]} · {project.title}</figcaption>
        </figure>
        <p>{project.description}</p>
        <nav>
          {#if project.links.external}
            <a href={project.links.external} target="_blank" rel="noopener noreferrer">play »</a>
          {/if}
          {#if project.links.post}
            <a href={project.links.post}>read more</a>
          {/if}
        </nav>
      </article>
    {/each}
  </div>
</div>

<style>
  #layout {
    box-sizing: border-box;
    width: 100%;
    max-width: 800px;
    padding: 40px 30px;
  }

  #content {
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding-top: 24px;
  }

  h1 {
    margin: 0;

    font-family: var(--font-display);
    font-weight: 500;
    font-size: 34px;
    line-height: 1.2;
  }

  .plate {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  figure {
    margin: 0;
    padding: 10px;
    box-shadow: inset 0 0 0 1px var(--hairline-strong);
  }

  figure img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 300px;
  }

  figcaption {
    padding-top: 8px;

    font-style: italic;
    font-size: 14.5px;
    color: var(--w-muted);
  }

  .plate > p {
    margin: 0;
  }

  .plate > nav {
    display: flex;
    gap: 20px;

    font-family: var(--font-mono);
    font-feature-settings:
      'ss01' on,
      'ss02' on;
    font-size: 13px;
    letter-spacing: 0.08em;
  }

  .plate > nav > a {
    color: var(--ink-muted);
    text-decoration: none;
  }

  .plate > nav > a:hover {
    color: var(--rubric);
  }
</style>
