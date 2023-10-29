import { formatTime } from "../../utils/helpers";
import { iconUrlFromCode } from "../services/weatherServices";
import { BsSunset, BsSunrise, BsThermometerSun } from "react-icons/bs";
import { FaWater } from "react-icons/fa6";

function TemperatureDetails({ weather }) {
  const {
    temp,
    humidity,
    feels_like,
    icon,
    details,
    temp_max,
    temp_min,
    speed,
    sunrise,
    sunset,
  } = weather || {};

  return (
    <div className="mainDiv flex w-full items-center gap-[10px] text-sm sm:text-base md:w-[60%]">
      <div className="w-[calc(100%/3)]  text-left">
        <h2 className="flex items-center gap-[2px] text-3xl">
          <BsThermometerSun />
          {temp?.toFixed()}°F
        </h2>
        <p className="text-2xl">Feels like: {feels_like?.toFixed()}°F</p>

        {/*Sunrise &  Sunset */}
        <div className="my-[5px] flex items-center gap-[5px]">
          <BsSunset className="text-2xl" />
          <div className="text-xs">
            <p>Sunrise: </p>
            <p>{formatTime(sunrise)}</p>
          </div>
        </div>
        <div className="flex items-center gap-[5px] ">
          <BsSunrise className="text-2xl" />
          <div className="text-xs">
            <p>Sunset:</p>
            <p> {formatTime(sunset)}</p>
          </div>
        </div>
        {/*Sunrise &  Sunset */}
      </div>

      <div className="w-[calc(100%/3)] ">
        {icon && (
          <img
            src={iconUrlFromCode(icon)}
            alt={details}
            className="mx-auto w-[150px]"
          />
        )}
        <h2 className="text-2xl">{details}</h2>
      </div>

      <div className="w-[calc(100%/3)] text-right">
        <h2>Humidity: {humidity?.toFixed()}%</h2>
        <p>Speed: {speed?.toFixed()}km/h</p>

        <p>Low: {temp_min?.toFixed()}*</p>
        <p>High: {temp_max?.toFixed()}*</p>
      </div>
    </div>
  );
}

export default TemperatureDetails;
