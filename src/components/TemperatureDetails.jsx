import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { GiSunset, GiSunrise } from "react-icons/gi";
import { FiWind } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TemperatureDetails = ({
  weather: {
    details,       // Weather condition details (e.g., "Cloudy")
    icon,          // URL to the weather icon
    temp,          // Current temperature
    temp_min,      // Minimum temperature
    temp_max,      // Maximum temperature
    sunrise,       // Sunrise time
    sunset,        // Sunset time
    speed,         // Wind speed
    humidity,      // Humidity percentage
    feels_like,    // Feels like temperature
  },
  units,           // Units of measurement (e.g., "metric" for km/h or "imperial" for m/s)
}) => {
  // Details for vertical section (Real Feel, Humidity, Wind)
  const VerticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,          // Icon for Real Feel temperature
      title: "Real Feel",               // Title for the detail
      value: `${feels_like.toFixed()}°`, // Value of Real Feel temperature
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,         // Icon for Humidity
      title: "Humidity",                // Title for the detail
      value: `${humidity.toFixed()}%`,  // Value of Humidity
    },
    {
      id: 3,
      Icon: FiWind,                     // Icon for Wind speed
      title: "Wind",                    // Title for the detail
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`, // Value of Wind speed with units
    },
  ];

  // Details for horizontal section (Sunrise, Sunset, High, Low)
  const HorizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,                  // Icon for Sunrise time
      title: "Sunrise",                 // Title for the detail
      value: sunrise,                   // Value of Sunrise time
    },
    {
      id: 2,
      Icon: GiSunset,                   // Icon for Sunset time
      title: "Sunset",                  // Title for the detail
      value: sunset,                    // Value of Sunset time
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,          // Icon for High temperature
      title: "High",                    // Title for the detail
      value: `${temp_max.toFixed()}°`,  // Value of High temperature
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,        // Icon for Low temperature
      title: "Low",                     // Title for the detail
      value: `${temp_min.toFixed()}°`,  // Value of Low temperature
    },
  ];

  return (
    <div>
      {/* Weather details (e.g., "Cloudy") */}
      <div className="flex justify-center items-center py-6 text-cyan-300 text-xl">
        <p>{details}</p>
      </div>

      {/* Current temperature, weather icon, and vertical details */}
      <div className="flex items-center justify-between py-3 flex-row">
        <img src={icon} alt="Cloud-sun-icon" className="size-10" /> {/* Weather icon */}
        <p className="text-5xl">{`${temp.toFixed()}°`}</p> {/* Current temperature */}
        <div className="flex flex-col space-y-3 items-start">
          {VerticalDetails.map(({ id, Icon, value, title }) => (
            <div key={id} className="flex font-light justify-center items-center text-sm">
              <Icon className="mr-1" size={20} /> {/* Vertical detail icon */}
              {`${title}:`} <span className="font-medium ml-1">{value}</span> {/* Vertical detail value */}
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal details (Sunrise, Sunset, High, Low temperatures) */}
      <div className="flex flex-row justify-center items-center space-x-10 text-sm py-3">
        {HorizontalDetails.map(({ id, Icon, value, title }) => (
          <div key={id} className="flex flex-row items-center">
            <Icon size={30} /> {/* Horizontal detail icon */}
            <p className="font-light ml-1">
              {`${title}:`} <span className="font-medium ml-1">{value}</span> {/* Horizontal detail value */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemperatureDetails;
