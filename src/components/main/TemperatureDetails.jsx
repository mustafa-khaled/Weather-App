import {
  BsSunset,
  BsSunrise,
  BsThermometerSun,
  BsClock,
  BsWind,
} from "react-icons/bs";
import { FaWater } from "react-icons/fa6";
import { BiSolidWidget } from "react-icons/bi";

function TemperatureDetails({ weather }) {
  const {
    condition: { icon, text } = {},
    temp_c,
    humidity,
    wind_kph,
    pressure_mb,
    uv,
  } = weather?.current || {};

  const { astro: { sunrise, sunset } = {} } =
    weather?.forecast?.forecastday[0] || {};

  return (
    <div className="mainDiv flex w-full flex-col  items-center gap-[10px] text-sm sm:flex-row sm:text-base md:w-[60%]">
      <div className="w-full sm:w-[calc(100%/3)]">
        <h2 className="flex items-center justify-center gap-[2px] text-3xl">
          <BsThermometerSun />
          {temp_c?.toFixed()}°F
        </h2>

        {/*Sunrise &  Sunset */}
        <div className="my-[5px] flex items-center justify-center gap-[5px]">
          <BsSunset className="text-2xl" />
          <div className="text-xs">
            <p>Sunrise: </p>
            <p>{sunrise}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[5px] ">
          <BsSunrise className="text-2xl" />
          <div className="text-xs">
            <p>Sunset:</p>
            <p> {sunset}</p>
          </div>
        </div>
        {/*Sunrise &  Sunset */}
      </div>

      <div className="w-full sm:w-[calc(100%/3)]">
        {icon && <img src={icon} alt={text} className="mx-auto w-[100px]" />}
        <h2 className="text-2xl">{text}</h2>
      </div>

      <div className="flex w-full items-start justify-center gap-[20px] sm:block sm:w-[calc(100%/3)]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[50%] text-center">
            <FaWater className="mx-auto text-2xl" />
            <p>{humidity?.toFixed()}%</p>
            <p className="text-xs">Humidity</p>
          </div>

          <div className="w-[50%] text-center">
            <BsWind className="mx-auto text-2xl" />
            <p>{wind_kph?.toFixed()}km/h</p>
            <p className="text-xs">Speed</p>
          </div>
        </div>

        <div className="flex items-center gap-[10px] sm:mt-[20px]">
          <div className="w-[50%] text-center">
            <BsClock className="mx-auto text-2xl" />
            <p>{pressure_mb?.toFixed()}hpa</p>
            <p className="text-xs">Pressure</p>
          </div>

          <div className="w-[50%]  text-center">
            <BiSolidWidget className="mx-auto text-2xl" />
            <p>{uv}</p>
            <p className="text-xs">Uv</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureDetails;
