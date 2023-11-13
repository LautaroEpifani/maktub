import { client } from "../../sanity/lib/client";

export async function getPosts() {
  const query = `*[_type == "post"]{
        title,
        category,
        description,
        "imageUrl": image.asset->url
      }`;
  const posts = await client.fetch(query, { cache: "no-store" });
  return posts;
}

export async function getCatalogue() {
  const query = `*[_type == "catalogo"]{
        title,
        category,
        description,
        "imageUrl": image.asset->url
      }`;
  const catalogue = await client.fetch(query, { cache: "no-store" });
  return catalogue;
}
