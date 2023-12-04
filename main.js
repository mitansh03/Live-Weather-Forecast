const apiKey = "2d02381ccaabf475706f5124f9c2d733";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  return data.value;
};
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  checkWeather(searchBox.value)
  console.log(searchBox.value);
  searchBox.value = "";
});
