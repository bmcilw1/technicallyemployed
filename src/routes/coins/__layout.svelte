<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ url, fetch }) {
    const post = await fetch(`${url?.pathname}.json`).then((res) => res.json());

    if (!post || !post.published) {
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
  import PageHead from '$lib/PageHead.svelte';
  import ArticleTitle from '$lib/ArticleTitle.svelte';
  import ArticleMeta from '$lib/ArticleMeta.svelte';

  export let post;
</script>

<PageHead title={post.name} description={post.ticker} />

<ArticleTitle title={post.name} />
<ArticleMeta author={post.name} date={post.date} />

<slot />
