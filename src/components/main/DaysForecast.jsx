import { formatTimestamp } from "../../utils/helpers";

function DaysForecast({ weather }) {
  const { forecastday } = weather || {};

  return (
    <div className="mainDiv w-full md:w-[30%]">
      <h2 className="text-xl">5 Days Forecast:</h2>
      {forecastday?.map((d) => {
        return (
          <div
            key={d?.date_epoch}
            className="flex items-center justify-between gap-[5px] text-sm"
          >
            <div className="w-[50px]  ">
              <img src={d?.day?.condition?.icon} alt="" />
            </div>
            <div className="w-[100px)] text-left">
              <p>{d?.day?.maxtemp_c}°C</p>
            </div>
            <div className="w-[50%] ">
              <p>{formatTimestamp(d?.date_epoch)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DaysForecast;
