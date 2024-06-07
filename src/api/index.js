import axios from "axios";

const API_KEY = "de37df82ca3444af48425667812956f3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export function getWeatherData(city) {
   return axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}`     
   );
}