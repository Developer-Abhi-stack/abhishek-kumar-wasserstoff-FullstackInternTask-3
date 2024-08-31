// The TimeAndLocation component displays the current local time and location details.
const TimeAndLocation = ({ weather: { formattedLocalTime, name, country } }) => {
  return (
    <div>
      {/* Container for the local time */}
      <div className="flex justify-center items-center my-6">
        <p className="text-xl font-extralight">
          {formattedLocalTime} {/* Display the formatted local time */}
        </p>
      </div>
      
      {/* Container for the location details */}
      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium">
          {`${name}, ${country}`} {/* Display the city and country */}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
