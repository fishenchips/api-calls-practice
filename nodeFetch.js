import fetch from "node-fetch";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getAllPost() {
  const response = await fetch(BASE_URL + "/posts");
  const posts = await response.json();

  console.log(posts);
}

export async function getAllUsers() {
  const response = await fetch(BASE_URL + "/users");
  const users = await response.json();

  console.log(users);
}

export async function getPost3() {
  const response = await fetch(BASE_URL + "/posts/3");
  const post = await response.json();

  console.log(post);
}

export async function picture59() {
  const response = await fetch(BASE_URL + "/photos/59");
  const picture = await response.json();

  console.log(picture);
}

// function to post a new user
export async function postUser() {
  const newUser = {
    name: "Philip",
    username: "hello",
    email: "hello@philip.nu",
    adress: "",
    phone: "",
  };

  //JSON need to be capitalized, built in object
  const response = await fetch(BASE_URL + "/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const json = await response.json();

  console.log(json);
}

// create a post
export async function postPost() {
  const newPost = {
    userId: 2,
    title: "heja",
    body: "beja hajen",
  };

  const response = await fetch(BASE_URL + "/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const json = await response.json();

  console.log(json);
}
