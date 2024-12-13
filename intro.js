const api_key = "7413ff87d51e181e6f20333bc770f6fe";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }

    }



}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});