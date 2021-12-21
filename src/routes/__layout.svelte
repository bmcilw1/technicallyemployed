<script>
  import '../app.css';
  import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
  <title>Technically Employed</title>
</svelte:head>

<main>
  <Nav />
  <slot />
</main>
