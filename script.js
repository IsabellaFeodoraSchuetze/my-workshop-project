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


function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#exampleInputCity");
  let cityHeading = document.querySelector("#city-name");
  cityHeading.innerHTML = `${cityInput.value}`;
}
let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", searchCity);

let clickButton = document.querySelector("button");
clickButton.addEventListener("click", searchCity);



function convertToFahrenheit(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = 50;
}

function convertToCelsius(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = 10;
}

let fahrenheitLink = document.querySelector("#units-fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#units-celsius");
celsiusLink.addEventListener("click", convertToCelsius);