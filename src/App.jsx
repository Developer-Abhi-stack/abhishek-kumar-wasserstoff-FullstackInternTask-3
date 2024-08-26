import Forecast from "./components/Forecast"
import Inputs from "./components/Inputs"
import TemperatureDetails from "./components/TemperatureDetails"
import TimeAndLocation from "./components/TimeAndLocation"
import TopButtons from "./components/TopButtons"
import getWeatherData from "./services/weatherSevice"

const App = () => {
  const getWeather = async() => {
    const data = await getWeatherData("weather", {q: "mumbai"})
    console.log(data);
    
  }
  getWeather();
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-lg shadow-gray-400 from-cyan-500 to-blue-500">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureDetails />
      <Forecast />
      <Forecast />
    </div>
  )
}

export default App
