<script lang="ts">
  import '../styles.css'
  import Header from '$lib/components/Header.svelte'
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
  <slot />
</main>

<style>
  main {
    display: flex;
    justify-content: center;

    font-family: 'Lato', sans-serif;
  }
</style>
