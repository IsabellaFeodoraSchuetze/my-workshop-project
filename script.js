let now = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentDate = date.getDate();
  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];

  let formattedDate = `${currentDay}, ${currentDate} ${currentMonth} ${currentYear}`;
  return formattedDate;
}

let todaysDate = document.querySelector("#todays-date");
todaysDate.innerHTML = formatDate(now);

function formatTime(time) {
  let currentTimeHour = time.getHours();
  if (currentTimeHour < 10) {
    currentTimeHour = `0${currentTimeHour}`;
  }
  let currentTimeMinutes = time.getMinutes();
  if (currentTimeMinutes < 10) {
    currentTimeMinutes = `0${currentTimeMinutes}`;
  }
  let formattedTime = `${currentTimeHour}:${currentTimeMinutes}`;
  return formattedTime;
}

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = formatTime(now);

function displayWeatherConditons(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#precipiation"
  ).innerHTML = response.data.weather[0].description.toUpperCase();
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(city) {
  let apiKey = "07d3e2feddd5515435aacbf0e4e4ea8d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditons);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#location-entry").value;
  searchCity(city);
}

searchCity("Copenhagen");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function showWeather(response) {
  let button = document.querySelector("button");
  let temperature = Math.round(response.data.main.temp);
  button.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "07d3e2feddd5515435aacbf0e4e4ea8d";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);
