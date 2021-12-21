<script>
  import '../app.css';
  import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
  <title>Technically Employed</title>
</svelte:head>

<main>
  <Nav
    navItems={[
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Coins', href: '/coins' },
    ]}
  />
  <slot />
</main>
