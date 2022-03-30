import fetch from "node-fetch";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getAllPost() {
  const response = await fetch(BASE_URL + "/posts");
  const posts = await response.json();

  console.log(posts);
}
