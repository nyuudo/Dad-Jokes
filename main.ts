// DOM variables (main button, text area for jokes)
const nextJoke = document.querySelector("#button") as HTMLButtonElement;
const jokeText = document.querySelector("#joke") as HTMLElement;

let currentJoke: string = "";
// Exercise 2 (data in DOM)
// ASYNC function to get current Joke
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
    jokeText.innerHTML = `${currentJoke}`;
    nextJoke.textContent = "NEXT JOKE";
    return currentJoke;
  } catch (error) {
    console.error(error);
  }
};

// Listeners for the main button
nextJoke.addEventListener("click", () => {
  getJoke();
});
