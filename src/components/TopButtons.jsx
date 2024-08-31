// TopButtons component receives setQuery as a prop
const TopButtons = ({ setQuery }) => {
  // Array of city objects with id and name properties
  const cities = [
    { id: 1, name: "New Delhi" },
    { id: 2, name: "Mumbai" },
    { id: 3, name: "Chennai" },
    { id: 4, name: "Kolkata" },
    { id: 5, name: "Patna" },
  ];

  return (
    <div className="flex justify-around items-center my-6">
      {/* Map through the cities array and create a button for each city */}
      {cities.map((item) => (
        <button
          key={item.id} // Unique key for each button to help React identify which items have changed
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: item.name })} // Set query to the city's name on button click
        >
          {item.name} {/* Display the name of the city */}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
