<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').Load}
   */

  export async function load({ fetch }) {
    // Use a `limit` querystring parameter to fetch a limited number of posts
    // e.g. fetch('posts.json?limit=5') for 5 most recent posts
    const posts = await fetch('/coins.json').then((res: { json: () => any }) => res?.json());

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import PageHead from '$lib/components/PageHead.svelte';
  import ArticleBlockLink from '$lib/components/ArticleBlockLink.svelte';

  export let posts = [];
</script>

<PageHead title="Crypto Coins" description="Interesting crypocurrencies" />

<div
  class="w-full mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 px-4"
>
  {#each posts as { slug, name, ticker }}
    <ArticleBlockLink
      title={name}
      description={`The case for `}
      accentDescription={ticker}
      url={`/coins/${slug}`}
    />
  {/each}
</div>

<slot />
