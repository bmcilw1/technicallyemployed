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
      { label: 'Coins', href: '/coins' },
    ]}
  />
  <section class="container max-w-4xl px-6">
    <slot />
  </section>
</main>
