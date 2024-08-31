import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureDetails from "./components/TemperatureDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/weatherSevice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  // State for storing the query parameters for the weather API
  const [query, setQuery] = useState({ q: "patna" });
  
  // State for storing the unit system (metric or imperial) for temperature
  const [units, setUnits] = useState("metric");
  
  // State for storing the weather data fetched from the API
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data based on the current query and units
  const getWeather = async () => {
    // Use the query parameter for city name or default to "current location"
    const cityName = query.q ? query.q : "current location";
    
    // Show a notification that weather fetching is in progress
    toast.info(`Fetching weather for ${capitalizeFirstLetter(cityName)}`);

    // Fetch weather data from the API and handle success or failure
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data); // Update the weather state with the fetched data
    });
  };

  // Use effect to trigger weather data fetch whenever query or units change
  useEffect(() => {
    getWeather();
  }, [query, units]);

  // Function to determine the background gradient based on temperature
  const formatBackground = () => {
    if (!weather) return "from-cyan-500 to-blue-500"; // Default background if no weather data

    // Set temperature threshold based on units
    const threshold = units === "metric" ? 20 : 60;
    
    // Return different gradients based on temperature
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-lg shadow-gray-400 ${formatBackground()}`}
    >
      {/* Render top buttons for selecting city and units */}
      <TopButtons setQuery={setQuery} />
      
      {/* Render inputs for setting city and temperature units */}
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          {/* Render time and location details if weather data is available */}
          <TimeAndLocation weather={weather} />
          
          {/* Render temperature details */}
          <TemperatureDetails weather={weather} units={units} />
          
          {/* Render hourly and daily forecast */}
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}

      {/* Render toast notifications */}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;
