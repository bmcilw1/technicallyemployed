<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import PageHead from '$lib/components/PageHead.svelte';
</script>

<PageHead description="Technical blog focused software development with cryptocurrency" />

<main>
  <Nav
    navItems={[
      { label: 'Home', href: '/' },
      { label: 'Coins', href: '/coins' },
    ]}
  />
  <slot />
</main>
