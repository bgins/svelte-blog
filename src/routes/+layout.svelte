<script lang="ts">
  import '../styles.css'
  import Header from '$lib/components/Header.svelte'
</script>

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
