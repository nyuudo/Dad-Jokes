var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Exercise 4 (Fetch weather API)
// DOM variable (weather)
const weather = document.querySelector(".weather");
// ASYNC function to get weather through an API
export const getWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const urlWeather = `https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.16&hourly=temperature_2m&models=best_match&current_weather=true&forecast_days=1&timezone=auto`;
        const response = yield fetch(urlWeather);
        const data = yield response.json();
        //console.log(data);
        weather.innerHTML = `${data.current_weather.temperature} °C`;
    }
    catch (error) {
        console.error(error);
    }
});
