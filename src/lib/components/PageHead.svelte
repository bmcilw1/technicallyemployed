<script lang="ts">
  export let title = '';
  export let description: string;

  const siteTitle = 'Technically Employed';
  const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;
</script>

<svelte:head>
  <title>{formattedTitle}</title>
  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta name="description" content={description} />
</svelte:head>
