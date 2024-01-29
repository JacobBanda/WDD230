const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7455552277403&lon=6.6234103505288076&appid=688c0b43fbdef42ff897097ce02a0576';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
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
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  
    const weatherEvents = data.weather.map(event => {
      const iconsrc = `https://openweathermap.org/img/w/${event.icon}.png`;
      const desc = event.description.replace(/\b\w/g, l => l.toUpperCase());
      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', desc);
  
      return `<p>${desc}</p>`;
    });
  
    captionDesc.innerHTML = weatherEvents.join('');
  }