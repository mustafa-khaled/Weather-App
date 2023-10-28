const API_KEY = "eb4e2079973cda751e8af67b8a95df84";
const BASE_URL = `https://api.openweathermap.org/data/2.5/`;

export const getWeatherData = (infoType, searchParam) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParam, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

export const getFormattedWeatherData = async (searchParam) => {
  const formattedCurrentWeather = await getWeatherData("weather");
};
