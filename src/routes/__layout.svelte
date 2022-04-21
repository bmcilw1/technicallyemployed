<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import PageHead from '$lib/components/PageHead.svelte';
</script>

<PageHead description="Technical blog focused software development with cryptocurrency" />

<main class="dark">
  <Nav
    navItems={[
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Coins', href: '/coins' },
    ]}
  />
  <slot />
</main>
