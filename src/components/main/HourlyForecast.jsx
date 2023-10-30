import { formatTime } from "../../utils/helpers";
import { BsWind } from "react-icons/bs";

function HourlyForecast({ weather }) {
  const { hour } = weather?.forecastday[0] || {};

  return (
    <div className="mainDiv w-full md:w-[70%]">
      <h2 className="mb-[10px] text-xl">Hourly Forecast:</h2>
      <div className=" flex  flex-wrap items-start justify-around gap-[10px] sm:justify-between">
        {hour?.slice(0, 5)?.map((h) => {
          return (
            <div
              key={h?.time_epoch}
              className="flex   flex-col items-center justify-around rounded-xl bg-bgColor2 px-[10px] py-[20px] 
            text-center text-sm text-[#ffffff]"
            >
              <h5>{formatTime(h?.time_epoch)}</h5>
              <img src={h?.condition?.icon} alt="" />
              <BsWind className="mx-auto mb-[5px] text-2xl" />
              <p>{h?.wind_kph}km/h</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HourlyForecast;
