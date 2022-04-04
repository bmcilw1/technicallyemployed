<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch, url }) {
    if (url.pathname === '/coins') return {};

    const post = await fetch(`${url.pathname}.json`).then((res: { json: () => any }) => res.json());

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
  import ArticleNextPrevious from '$lib/components/ArticleNextPrevious.svelte';

  export let post = null;
</script>

{#if post}
  <PageHead title={post.name} description={post.ticker} />

  <div class="container mx-auto max-w-screen-md">
    <div class="pb-5 mb-5 border-b border-gray-100 text-center">
      <ArticleTitle title={post.name} />
      <ArticleMeta author={`The case for ${post.ticker}`} date={post.date} />
    </div>
    <article class="prose prose-zinc dark:prose-invert mx-5">
      <slot />
    </article>
    <ArticleNextPrevious
      next={post.next ? { name: post.next?.name, url: `/coins/${post.next?.slug}` } : null}
      previous={post.previous
        ? { name: post.previous?.name, url: `/coins/${post.previous?.slug}` }
        : null}
    />
  </div>
{:else}
  <slot />
{/if}
