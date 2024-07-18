import axios from "axios";

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => console.log(data)) // Log the data to the console
    .catch((error) => console.error("Error fetching data:", error)); // Log any errors
};

const fetchTodosById = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`); // Perform the fetch request
    const data = await response.json(); // Parse the response as JSON
    console.log(data); // Log the data to the console
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors
  }
};

// fetchTodos();
// fetchTodosById(1);
// console.log("test what prints first");

const postComment = async (comment) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      title: "Learning",
      body: "Lorem Ipsum",
      userId: 42,
    }),
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
};

// postComment();

// Axios
// --------------------------------------
// pros over fetch
// - lighter syntax
// - browser compatibility
// - error handling
// - timeout

const getPosts = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message));
};

// https://blog.logrocket.com/axios-vs-fetch-best-http-requests/
