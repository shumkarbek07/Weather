let API = 'http://api.openweathermap.org/data/2.5/weather?q=';
let appID = '&appid=b067377a72c98ae6963cdae2e35408d9';

/*
Старана
Город
Температура
Ощущается как
*/

function getCity () {
  const city = document.getElementById('city').value;
  getWeatherByCity(city);
}

const button = document.getElementById('btn');
button.addEventListener('click', getCity);

async function getWeatherByCity(city) {
  const response = await fetch(API + city + appID);
  const weather = await response.json();
  console.log('weather: ', weather);
}

function getCity(weather) {
  
}

// 