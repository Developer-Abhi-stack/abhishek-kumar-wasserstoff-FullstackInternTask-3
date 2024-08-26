const API_KEY = "0e85d3ef1acdd29c790ea6fcd817ee3d"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType)
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

export default getWeatherData;