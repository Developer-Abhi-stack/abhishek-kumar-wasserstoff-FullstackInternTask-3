### Weather Forecast Dashboard Design

#### Overview
This single-page weather forecast application will allow users to enter a city name and view the current weather and a 5-day forecast. The app will be implemented using ReactJS with Tailwind CSS for styling, leveraging a public API like OpenWeatherMap to fetch weather data.

#### Features

1. **City Weather Search**
   - **Input:** A text input field for the user to enter a city name.
   - **Search Button:** A button to trigger the search for weather details of the entered city.
   - **Error Handling:** If the city name is invalid or data cannot be fetched, an appropriate error message will be displayed.

2. **Current Weather Details**
   - **Temperature:** Current temperature in both Celsius and Fahrenheit.
   - **Min/Max Temperature:** Displays the day's minimum and maximum temperatures.
   - **Humidity:** Shows the current humidity percentage.
   - **Wind:** Displays the wind speed and direction.
   - **Weather Description:** A short text description of the current weather (e.g., "clear sky," "light rain").
   - **Weather Icon:** An icon reflecting the current weather condition.

3. **5-Day Weather Forecast**
   - **Date:** Displays the date for each of the five forecasted days.
   - **Average Temperature:** The forecasted average temperature in both Celsius and Fahrenheit.
   - **Weather Description:** A short description of the weather forecast.
   - **Weather Icon:** An icon for the predicted weather condition.

4. **Temperature Unit Toggle**
   - **Toggle Button:** Allows users to switch between Celsius and Fahrenheit for both current weather and the 5-day forecast.

#### Technical Requirements

- **ReactJS:** To build a dynamic and interactive user interface.
- **Tailwind CSS:** For a responsive and modern design.
- **API Integration:** Utilize a public weather API like OpenWeatherMap to fetch real-time weather data.
- **Error Handling:** Gracefully handle errors with meaningful messages (e.g., when an invalid city name is entered).
- **Responsiveness:** Ensure the application looks good on all devices, including desktop, tablet, and mobile.

## Installation

Instructions on how to install and set up the project.

```bash
# Clone the repository
git clone https://github.com/Developer-Abhi-stack/abhishek-kumar-wasserstoff-FullstackInternTask-3.git

# Navigate to the project directory
cd Weather-Forecast-App

# Install dependencies
npm install
#### Project Structure

```
/weather-dashboard
│
├── /public
│   └── index.html
│
├── /src
│   ├── /components
│   │   ├── Forcast.jsx
│   │   ├── Inputs.jsx
│   │   ├── TemperatureDetail.jsx
│   │   ├── TimeAndLocation.jsx
│   │   ├── TopButtons.jsx
│   │  
│   │
│   ├── /styles
│   │   └── tailwind.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   
│
├── README.md
└── package.json
```



#### API Integration (api.js)

- Utilize `fetch`  to make requests to the OpenWeatherMap API.
- Parse the returned JSON data to extract the necessary information for both current weather and 5-day forecast.

#### Styling (tailwind.css)

- **Responsive Design:** Ensure all components are responsive, using Tailwind's utility classes like `flex`, `grid`, `p-4`, `m-4`, etc.
- **Theming:** Apply consistent theming across the app, potentially with light/dark mode options.

#### Error Handling

- Gracefully handle API errors, displaying user-friendly messages.
- Validate user input to ensure a city name is provided before making the API call.

#### Readme File (README.md)

The `README.md` should contain:
- **Project Overview:** A brief description of the application.
- **Installation Instructions:** Steps to install dependencies and run the app locally.
- **API Information:** A brief explanation of the API used and how to get an API key.
- **Usage Instructions:** How to use the application and what features are available.
- **Future Enhancements:** Possible future improvements and features.

---

