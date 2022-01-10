<script lang="ts">
  export let description: string;
  export let slug = '';
  export let collectionPath = '/coins';

  const href = slug && `${collectionPath}/${slug}`;
</script>

<p>
  {description}

  {#if slug}
    <a {href}>Read More &rarr;</a>
  {/if}
</p>
