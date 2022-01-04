<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    // Use a `limit` querystring parameter to fetch a limited number of posts
    // e.g. fetch('posts.json?limit=5') for 5 most recent posts
    const posts = await fetch('/coins.json').then((res) => res.json());

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import PageHead from '$lib/PageHead.svelte';
  import Article from '$lib/Article.svelte';
  import ArticleTitle from '$lib/ArticleTitle.svelte';
  import ArticleMeta from '$lib/ArticleMeta.svelte';
  import ArticleDescription from '$lib/ArticleDescription.svelte';

  export let posts;
</script>

<PageHead title="Home" description="An awesome blog about development with Svelte" />

<p>
  This is a minimalistic example of a blog built with <a href="https://kit.svelte.dev">SvelteKit</a>
  and <a href="https://mdsvex.com/">MDsveX</a>.
  <a href="https://github.com/mvasigh/sveltekit-mdsvex-blog">View source code on Github.</a>
</p>

{#each posts as { slug, title, author, description, date }}
  <Article>
    <ArticleTitle {slug} {title} />
    <ArticleMeta {author} {date} />
    <ArticleDescription {description} {slug} />
  </Article>
{/each}

<slot />
