import { defineStore } from "pinia";
import { getWeatherData } from "@/api";

export const useWeatherStore = defineStore("weather", {
   id: "weather",
   state: () => ({
      city: '',
      weatherData: null
   }),
   actions: {
      async getWeatherData(city) {
         const responce = await getWeatherData(city);
         this.weatherData = responce.data;
         console.log("weatherData: ", this.weatherData);
         this.city = city;
      }
   }
});