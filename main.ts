// DOM variables (main button, text area for jokes)
const nextJoke = document.querySelector("#button") as HTMLButtonElement;
const jokeText = document.querySelector("#joke") as HTMLElement;
const rating = document.querySelector(".rating") as HTMLElement;

let currentJoke: string = "";
let currentScore: number = 0;
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
    rating.classList.add("fadeIn");
    nextJoke.textContent = "NEXT JOKE";
    return currentJoke;
  } catch (error) {
    console.error(error);
  }
};

// Exercise 3 (score Jokes)
// Variables in order to retrieve joke scores
const date = new Date();
let currentDate = date.toISOString();
const reportJokes: { joke: string; score: number; date: string }[] = [];

// Listener to retrieve scores as a number from DOM
export const jokeStar = document.querySelectorAll('[id^="star"]');
jokeStar.forEach((jokeStar) => {
  const score = Number(jokeStar.id.substring(4));
  jokeStar.addEventListener("click", () => (currentScore = score));
});

// Function to score any jokes and collect them into an array to be print in the console
const jokeScore = (score: number) => {
  // reportJokes variable to collect jokes evaluation
  let report = {
    joke: currentJoke,
    score: score,
    date: currentDate,
  };
  if (score !== 0) {
    reportJokes.push(report);
    console.log(reportJokes);
  }
};

// Listeners for the main button
nextJoke.addEventListener("click", () => {
  getJoke();
  jokeScore(currentScore);
});
