<script>
  // src/routes/__layout.svelte
  import "/static/app.css";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- Suppress slot warning https://github.com/sveltejs/kit/issues/981 -->
{#if false}<slot/>{/if}
