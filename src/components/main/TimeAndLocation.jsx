import { formatTime, formatTimestamp } from "../../utils/helpers";

function TimeAndLocation({ weather }) {
  const { country, name, dt } = weather || {};

  const formattedDate = formatTimestamp(dt);
  const formattedTime = formatTime(dt);

  return (
    <div className="mainDiv flex w-full flex-col items-center justify-between md:w-[40%]">
      <h1 className="text-4xl">
        {name}, {country}
      </h1>
      <div>
        <h2 className="mb-[10px] text-6xl">{formattedTime}</h2>
        {dt && <p>{formattedDate}</p>}
      </div>
    </div>
  );
}

export default TimeAndLocation;
