import { DateTime } from "luxon";

// API Key and Base URL for OpenWeatherMap
const API_KEY = "0e85d3ef1acdd29c790ea6fcd817ee3d";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// Function to fetch weather data from the API
const getWeatherData = (infoType, searchParams) => {
    // Create URL with query parameters
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    // Fetch data and return as JSON
    return fetch(url)
        .then((res) => res.json());
};

// Function to get the icon URL from the icon code
const iconUrlFromCode = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

// Function to format the timestamp to local time
const formatToLocalTime = (
    secs, // Timestamp in seconds
    offset, // Timezone offset in seconds
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a" // Desired format
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

// Function to format current weather data
const formatCurrent = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
        timezone,
    } = data;

    const { main: details, icon } = weather[0];
    const formattedLocalTime = formatToLocalTime(dt, timezone);

    return {
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        country,
        sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm a'),
        sunset: formatToLocalTime(sunset, timezone, 'hh:mm a'),
        speed,
        details,
        icon: iconUrlFromCode(icon),
        formattedLocalTime,
        dt,
        timezone,
        lat,
        lon,
    };
};

// Function to format forecast weather data
const formatForecastWeather = (secs, offset, data) => {
    // Filter hourly data and format it
    const hourly = data.filter((f) => f.dt > secs).map((f) => ({
        temp: f.main.temp,
        title: formatToLocalTime(f.dt, offset, "hh:mm a"),
        icon: iconUrlFromCode(f.weather[0].icon),
        date: f.dt_txt,
    })).slice(0, 5); // Limit to the next 5 hours

    // Filter daily data and format it
    const daily = data.filter((f) => f.dt_txt.slice(-8) === "00:00:00")
        .map((f) => ({
            temp: f.main.temp,
            title: formatToLocalTime(f.dt, offset, "ccc"),
            icon: iconUrlFromCode(f.weather[0].icon),
            date: f.dt_txt,
        }));
        
    return { hourly, daily };
};

// Main function to get and format weather data
const getFormattedWeatherData = async (searchParams) => {
    // Fetch and format current weather data
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrent);

    // Extract necessary information for forecast data
    const { dt, lat, lon, timezone } = formattedCurrentWeather;

    // Fetch and format forecast weather data
    const formattedForecastWeather = await getWeatherData('forecast', { lat, lon, units: searchParams.units })
        .then((d) => formatForecastWeather(dt, timezone, d.list));

    // Combine current weather and forecast data
    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
