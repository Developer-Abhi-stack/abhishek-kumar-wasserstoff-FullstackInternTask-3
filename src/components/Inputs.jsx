import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  // State to store the city name input by the user
  const [city, setCity] = useState('');

  // Function to handle the search button click
  const handleSearchClick = () => {
    // If the city is not empty, update the query with the city name
    if (city !== '') setQuery({ q: city });
  };

  // Function to handle the location button click
  const handleLocationClick = () => {
    // Check if geolocation is available in the user's browser
    if (navigator.geolocation) {
      // Get the current position of the user
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // Update the query with the latitude and longitude
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      {/* Input and search/location buttons section */}
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        {/* Input field for city search */}
        <input 
          value={city} 
          onChange={(e) => setCity(e.currentTarget.value)} 
          type="text" 
          placeholder="Search by city..." 
          className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase" 
        />
        
        {/* Search button */}
        <BiSearch 
          onClick={handleSearchClick} 
          className="cursor-pointer transition ease-out hover:scale-125" 
          size={30} 
        />
        
        {/* Location button */}
        <BiCurrentLocation 
          onClick={handleLocationClick} 
          className="cursor-pointer transition ease-out hover:scale-125" 
          size={30} 
        />
      </div>
      
      {/* Unit toggle buttons (Celsius/Fahrenheit) */}
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button 
          className="text-2xl font-medium transition ease-out hover:scale-125" 
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button 
          className="text-2xl font-medium transition ease-out hover:scale-125" 
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
