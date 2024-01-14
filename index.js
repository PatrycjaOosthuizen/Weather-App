//search engine
function displayTemperature(response) {
  console.log(response.data);
  //when console.log -need to search for city to see result
  let temperatureElement = document.querySelector("#current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  // moved city element
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
// search engine and city search plus selector replace city h1 in HTML but now city is moved to function displayTemperature
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  // we moved city element from here to function displayTemperature so if someone search or
  //mistype city name with capital letters function display temperature will correct to what is in json package
  let city = searchInputElement.value;

  let apiKey = "6f64aatd0b0oe3cc63e4fb944c32303a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

// date and time
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
