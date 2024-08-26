const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "New Delhi",
    },
    {
      id: 2,
      name: "Mumbai",
    },
    {
      id: 1,
      name: "Chennai",
    },
    {
      id: 1,
      name: "Kolkata",
    },
    {
      id: 1,
      name: "Patna",
    },
  ];

  return (
    <div className="flex justify-around items-center my-6">
      {cities.map((item) => (
        <button
          key={item.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
