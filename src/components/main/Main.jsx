import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "../services/weatherServices";

import TimeAndLocation from "./TimeAndLocation";
import DaysForecast from "./DaysForecast";
import HourlyForecast from "./HourlyForecast";
import TemperatureDetails from "./TemperatureDetails";

function Main() {
  const [query, setQuery] = useState({ q: "cairo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="container mx-auto mt-[20px] min-h-[calc(100vh-90px)] px-[10px] text-textColor">
      <div className="flex flex-col items-start gap-[20px] md:flex-row">
        <TimeAndLocation weather={weather} />
        <TemperatureDetails weather={weather} />
      </div>
      <div className="mt-[20px] flex flex-col items-start gap-[20px] md:flex-row">
        <DaysForecast weather={weather} />
        <HourlyForecast weather={weather} />
      </div>
    </div>
  );
}

export default Main;
