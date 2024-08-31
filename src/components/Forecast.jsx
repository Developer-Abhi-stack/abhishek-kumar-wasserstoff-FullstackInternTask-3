// Importing the Cloud_Sun_Icon image from the assets folder
import Cloud_Sun_Icon from '../assets/cloud-sun-icon.png'

// Defining the Forecast component, which takes in two props: title and data
const Forecast = ({ title, data }) => {

  return (
    <div>
      {/* Header section with the title, aligned to the start of the div */}
      <div className="flex justify-start items-center mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>

      {/* Horizontal line for separating the title from the forecast data */}
      <hr className="my-1" />

      {/* Container for forecast data, with items evenly spaced horizontally */}
      <div className="flex items-center justify-between">
        {
          // Mapping through the data array to render each forecast item
          data.map((d, index) => (
            <div key={index} className="flex items-center flex-col justify-center">
              {/* Displaying the time/title of the forecast */}
              <p className='font-light text-sm'>{d.title}</p>
              
              {/* Displaying the weather icon */}
              <img src={d.icon} alt="Cloud_Sun_Icon" className='size-5' />
              
              {/* Displaying the temperature, rounded to the nearest integer */}
              <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

// Exporting the Forecast component to be used in other parts of the application
export default Forecast
