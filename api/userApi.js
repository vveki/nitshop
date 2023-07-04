import { userEndpoint } from "../endpoint/endpoints";

export async function fetchAllUsers() {
  const res = await fetch(userEndpoint.fetchAll);

  return res.json();
}
export async function fetchAllArticle() {
  const res = await fetch(userEndpoint.fetchArticle);

  return res.json();
}

export async function fetchAllComments() {
  const res = await fetch(userEndpoint.fetchComments);

  return res.json();
}
export async function fetchProducts() {
  const res = await fetch(userEndpoint.fetchProducts);

  return res.json();
}
