import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getAllUsers() {
  const response = await axios.get(BASE_URL + "/users");

  const user = response.data;

  console.log(user);
}

export async function getAllPosts() {
  const response = await axios.get(BASE_URL + "/posts");

  const posts = response.data;

  console.log(posts);
}

export async function post3() {
  const response = await axios.get(BASE_URL + "/posts/3");

  const post = response.data;

  console.log(post);
}

export async function picture59() {
  const response = await axios.get(BASE_URL + "/photos/59");

  const picture = response.data;

  console.log(picture);
}

export async function postUser() {
  const newUser = {
    name: "Philip",
    email: "philip@com",
  };

  const response = await axios.post(BASE_URL + "/users", newUser);

  console.log(response.data);
}

export async function postPost() {
  const newPost = {
    userId: 4,
    title: "hello",
    body: "there!",
  };

  const response = await axios.post(BASE_URL + "/posts", newPost);

  if (response.status.toString().startsWith("2")) {
    console.log(response.data);
  } else {
    console.log("error");
  }
}
