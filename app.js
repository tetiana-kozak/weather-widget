function getWeatherData() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("data :>> ", data);
      setWeatherData(data);
    });
}

function setWeatherData(data) {
  const city = document.querySelector(".city");
  const icon = document.querySelector(".icon");
  const temp = document.querySelector(".temp-value");
  const weatherType = document.querySelector(".weather-type");

  city.innerHTML = data.name;

  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
  );

  temp.innerHTML = Math.round(data.main.temp);
  weatherType.innerHTML = data.weather[0].description;
  // console.log("data.name :>> ", data.name);
  // console.log("data.temp :>> ", Math.round(data.main.temp));
  // console.log("data.weather.main :>> ", data.weather[0].main);
}

getWeatherData();
