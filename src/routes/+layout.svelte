<script lang="ts">
  import '@fontsource-variable/literata'
  import '@fontsource-variable/literata/wght-italic.css'
  import '@fontsource-variable/eb-garamond'
  import '@fontsource-variable/eb-garamond/wght-italic.css'
  import '@fontsource/geist-mono/400.css'
  import '@fontsource/geist-mono/500.css'
  import '@fontsource/geist-mono/600.css'
  import '@fontsource/geist-mono/700.css'
  import '../styles.css'
  import Grain from '$lib/components/Grain.svelte'
  import Header from '$lib/components/Header.svelte'

  let { children } = $props()
</script>

<svelte:head>
  <link
    rel="alternate"
    type="application/rss+xml"
    title="Syntactic Overdrive Feed"
    href={`${import.meta.env.VITE_ORIGIN}/feed.xml`}
  />
</svelte:head>

<Header />

<main>
  {@render children()}
</main>

<Grain />

<style>
  main {
    display: flex;
    justify-content: center;
  }
</style>
