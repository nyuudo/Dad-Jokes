// Exercise 4 (Fetch weather API)
// DOM variable (weather)
const weather = document.querySelector(".weather") as HTMLElement;
// ASYNC function to get weather through an API
export const getWeather = async () => {
  try {
    const urlWeather = `https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.16&hourly=temperature_2m&models=best_match&current_weather=true&forecast_days=1&timezone=auto`;
    const response = await fetch(urlWeather);
    const data = await response.json();
    //console.log(data);
    weather.innerHTML = `${data.current_weather.temperature} °C`;
  } catch (error) {
    console.error(error);
  }
};
