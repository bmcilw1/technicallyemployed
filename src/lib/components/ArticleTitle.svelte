<script lang="ts">
  export let slug = '';
  export let title: string;

  const id = title
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, '')
    .replace(/\s/g, '-');

  const href = slug ? `/coins/${slug}` : '#' + id;
</script>

{#if slug}
  <h3 {id}>
    <a {href}>
      {title}
    </a>
  </h3>
{:else}
  <h2 {id}>
    <a {href}>
      {title}
    </a>
  </h2>
{/if}
