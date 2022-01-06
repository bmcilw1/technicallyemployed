<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').Load}
   */

  export async function load({ fetch }) {
    // Use a `limit` querystring parameter to fetch a limited number of posts
    // e.g. fetch('posts.json?limit=5') for 5 most recent posts
    const posts = await fetch('/coins.json').then((res) => res?.json());

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import PageHead from '$lib/components/PageHead.svelte';
  import ArticleTitle from '$lib/components/ArticleTitle.svelte';
  import ArticleMeta from '$lib/components/ArticleMeta.svelte';
  import ArticleDescription from '$lib/components/ArticleDescription.svelte';

  export let posts;
</script>

<PageHead title="Crypto Coins" description="Interesting crypocurrencies" />

{#each posts as { slug, name, ticker, date }}
  <article>
    <ArticleTitle {slug} title={name} />
    <ArticleMeta author="Brian McIlwain" {date} />
    <ArticleDescription description={name} {slug} />
  </article>
{/each}

<slot />
