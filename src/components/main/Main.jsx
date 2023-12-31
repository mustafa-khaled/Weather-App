import { useEffect, useState } from "react";

import TimeAndLocation from "./TimeAndLocation";
import DaysForecast from "./DaysForecast";
import HourlyForecast from "./HourlyForecast";
import TemperatureDetails from "./TemperatureDetails";
import Empty from "./Empty";
import Loader from "../loader/Loader";

function Main({ searchQuery }) {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=fba14b7af46e4205843140225233010&q=${searchQuery}07112&days=5`,
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery.length > 3) {
      fetchWeatherData();
    }
  }, [searchQuery]);

  if (isLoading) return <Loader />;

  if (!weather) return <Empty message="Enter a location." />;
  if (weather?.error) return <Empty message={weather?.error.message} />;

  return (
    <div className="container mx-auto mt-[20px] min-h-[calc(100vh-90px)] px-[10px] pb-[20px] text-textColor">
      <div className="flex flex-col items-start gap-[20px] md:flex-row">
        <TimeAndLocation weather={weather?.location} />
        <TemperatureDetails weather={weather} />
      </div>
      <div className="mt-[20px] flex flex-col items-start gap-[20px] md:flex-row">
        <DaysForecast weather={weather?.forecast} />
        <HourlyForecast weather={weather?.forecast} />
      </div>
    </div>
  );
}

export default Main;
