<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
  <title>Technically Employed</title>
</svelte:head>

<main>
  <Nav
    navItems={[
      { label: 'Home', href: '/' },
      { label: 'Coins', href: '/coins' },
    ]}
  />
  <slot />
</main>
