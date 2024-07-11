const url = "https://jsonplaceholder.typicode.com/posts";

const fetchDataPromise = (url) => {
  fetch(url)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => console.log(data)) // Log the data to the console
    .catch((error) => console.error("Error fetching data:", error)); // Log any errors
};

const fetchDataAsync = async (url) => {
  try {
    const response = await fetch(url); // Perform the fetch request
    const data = await response.json(); // Parse the response as JSON
    console.log(data); // Log the data to the console
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors
  }
};
