
function getWeather() {
    var city = document.getElementById("city").value;
    var result = document.getElementById("weather");

    if (city == "") {
        alert("Please enter a city name");
        return;
    }

    result.innerHTML = "Loading...";

    var apiKey = "5fb914310eaa9a0bb5d0c41e26ef4034";

    var url = "https://api.openweathermap.org/data/2.5/weather?q="
        + encodeURIComponent(city)
        + "&appid=" + apiKey
        + "&units=metric";

    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("City not found or API error");
            }
            return response.json();
        })
        .then(function(data) {
            result.innerHTML =
                "<h2>" + data.name + "</h2>" +
                "<p>Temperature: " + data.main.temp + " °C</p>" +
                "<p>Weather: " + data.weather[0].description + "</p>" +
                "<p>Humidity: " + data.main.humidity + "%</p>" +
                "<p>Wind Speed: " + data.wind.speed + " m/s</p>";
        })
        .catch(function(error) {
            result.textContent = error.message;
        });
}
