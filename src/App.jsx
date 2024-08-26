import Inputs from "./components/Inputs"
import TemperatureDetails from "./components/TemperatureDetails"
import TimeAndLocation from "./components/TimeAndLocation"
import TopButtons from "./components/TopButtons"

const App = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-lg shadow-gray-400 from-cyan-500 to-blue-500">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureDetails />
    </div>
  )
}

export default App
