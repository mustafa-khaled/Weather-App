import { getWeatherData } from "../services/weatherServices";
import Country from "./Country";
import DaysForecast from "./DaysForecast";
import HourlyForecast from "./HourlyForecast";
import ResultsDetails from "./ResultsDetails";

function Main() {
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "cairo" });

    console.log(data);
  };

  fetchWeather();

  return (
    <div className="container mx-auto mt-[20px] min-h-[calc(100vh-90px)] px-[10px] text-textColor">
      <div className="flex flex-col items-start gap-[20px] md:flex-row">
        <Country />
        <ResultsDetails />
      </div>
      <div className="mt-[20px] flex flex-col items-start gap-[20px] md:flex-row">
        <DaysForecast />
        <HourlyForecast />
      </div>
    </div>
  );
}

export default Main;
