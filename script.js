const apiKey = "27a36f0ea979fb018e4b882abd8899c8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector("#cityInput");
const submitbtn = document.querySelector("#searchBtn");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('#temperature').innerHTML = Math.round(data.main.temp) + "&deg;C";

    document.querySelector('#sunriseTime').innerHTML =  data.main.temp_max + "&deg;C";
    document.querySelector('#sunsetTime').innerHTML =  data.main.temp_min + "&deg;C";

    document.querySelector('#feelsLikeTemp').innerHTML =  Math.round(data.main.feels_like) + "&deg;C";

    document.querySelector('#humidityValue').textContent = data.main.humidity + "%";
    document.querySelector('#windSpeed').textContent = Math.round(data.wind.speed) + " km/h";
}

submitbtn.addEventListener('click', (event) => {
    event.preventDefault();
    checkWeather(searchBar.value);
});
