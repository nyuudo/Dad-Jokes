// Exercise 1 (data in log)
// ASYNC function to get current Joke
let currentJoke: string = "";
const getJoke = async () => {
  try {
    const url = `https://icanhazdadjoke.com/`;
    const header: { method: "GET"; headers: { Accept: "application/json" } } = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    const response = await fetch(url, header);
    const data = await response.json();
    currentJoke = data.joke;
    console.log(currentJoke);
    return currentJoke;
  } catch (error) {
    console.error(error);
  }
};
getJoke();
