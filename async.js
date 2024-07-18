// promises
const moviePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const movie = "Inception";
    resolve(`You are watching: ${movie}`);
  }, 2000);
});

const watchMovieWithPromise = () => {
  moviePromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

watchMovieWithPromise();

// async/await
const watchMovieWithAsync = async () => {
  try {
    const message = await moviePromise;
    console.log(message);
  } catch (error) {
    console.error("Error:", error);
  }
};

watchMovieWithAsync();
