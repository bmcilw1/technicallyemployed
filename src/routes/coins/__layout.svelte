<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ url, fetch }) {
    if (!url) {
      console.log('no url');

      return {};
    }

    const post = await fetch(`${url?.pathname}.json`).then((res) => res.json());

    if (!post) {
      return {
        status: 404,
        error: new Error('Post could not be found'),
      };
    }

    return {
      props: {
        post,
      },
    };
  }
</script>

<script lang="ts">
  import PageHead from '$lib/components/PageHead.svelte';
  import ArticleTitle from '$lib/components/ArticleTitle.svelte';
  import ArticleMeta from '$lib/components/ArticleMeta.svelte';

  export let post = null;
</script>

{#if post}
  <PageHead title={post.name} description={post.ticker} />

  <ArticleTitle title={post.name} />
  <ArticleMeta author={post.name} date={post.date} />
{/if}

<article class="prose prose-zinc dark:prose-invert">
  <slot />
</article>
