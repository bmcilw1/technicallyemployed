import { slugFromPath } from '$lib/util';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
  const modules = import.meta.glob('./*.{md,svx}');

  let match;
  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path);
    if (slug === params.slug) {
      match = [path, slug, resolver];
      break;
    }
  }

  if (!match) {
    return {
      status: 404,
    };
  }

  const post = await match[2]();

  const postPromises = [];
  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugFromPath(path);
    const promise = resolver().then((post) => ({
      slug,
      path,
      ...post.metadata,
    }));

    postPromises.push(promise);
  }

  const posts = await Promise.all(postPromises);
  posts.sort((a, b) => (new Date(a?.date) < new Date(b?.date) ? -1 : 1));
  const postIdx = posts.findIndex((p) => p.slug === params.slug);
  post.metadata.previous = postIdx > 0 ? posts[postIdx - 1] : null;
  post.metadata.next = postIdx < posts.length - 1 ? posts[postIdx + 1] : null;

  return {
    body: post.metadata,
  };
}
