import { slugFromPath } from '$lib/util';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url }) {
  const modules = import.meta.glob('./*.{md,svx}');

  const postPromises = [];
  const limit = Number(url?.searchParams?.get('limit') ?? Infinity);

  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path);
    const promise = resolver().then((post) => ({
      slug,
      ...post.metadata,
    }));

    postPromises.push(promise);
  }

  const posts = await Promise.all(postPromises);
  const publishedPosts = posts.slice(limit);

  publishedPosts.sort((a, b) => (new Date(a?.date) > new Date(b?.date) ? -1 : 1));

  return {
    body: publishedPosts,
  };
}
