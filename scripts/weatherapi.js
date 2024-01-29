const weatherBox = document.querySelector('.weather-box');
const weatherIcon = document.querySelector('.weather-icon');

const lat = 26.051424407435;
const long = -98.30112831644209;
const apiKey = '688c0b43fbdef42ff897097ce02a0576';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  apiFetch();
  
  function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather-icon');
    const msgForcast = `${data.main.temp}&deg;F - ${desc}`;
    weatherBox.innerHTML = msgForcast;
  }