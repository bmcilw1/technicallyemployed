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
    postPromises.push([slug, resolver]);
  }

  const posts = await Promise.all(postPromises);
  posts.sort((a, b) => (new Date(a?.date) < new Date(b?.date) ? -1 : 1));

  return {
    body: post.metadata,
  };
}
