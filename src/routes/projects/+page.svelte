<script>
  import { page } from '$app/stores'
  import LinkIcon from '$lib/components/icons/Link.svelte'
  import PaperIcon from '$lib/components/icons/Paper.svelte'

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
    {#each projects as project}
      <div class="card">
        <div class="card-header">
          {#if project.links.external}
            <a href={project.links.external} target="_blank">
              <img src="/images/projects/{project.image}" alt={project.alt} />
            </a>
          {:else}
            <img src="/images/projects/{project.image}" alt={project.alt} />
          {/if}
        </div>
        <div class="card-body">
          <h3>{project.title}</h3>
          <div>{project.description}</div>
        </div>
        <div class="card-footer">
          {#if project.links.external}
            <a href={project.links.external} target="_blank">
              <LinkIcon />
              <span>Play</span>
            </a>
          {/if}
          {#if project.links.post}
            <a href={project.links.post}>
              <PaperIcon />
              <span>Read More</span>
            </a>
          {/if}
        </div>
      </div>
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
    align-items: start;
    gap: 15px;
    padding-top: 20px;
  }

  .card {
    display: grid;
    grid-template-rows: 300px 1fr 40px;
    width: 100%;
    background-color: var(--bg-raised);
    box-shadow: inset 0 0 0 1px var(--hairline-strong);
  }

  .card-header img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    padding: 10px;
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 10px 5px 10px;
  }

  .card-footer > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
    color: var(--ink);
    text-decoration: none;
    transition: color ease-out 0.03s;
  }

  .card-footer > a:hover {
    color: var(--rubric);
    transition: color ease-in 0.06s;
  }

  h1 {
    margin: 0;
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 34px;
    line-height: 1.2;
  }

  h3 {
    margin: 0;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 20px;
    line-height: 1.3;
  }
</style>
