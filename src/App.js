import './App.css';
import CurrentWeather from './components/CurrentWeather';
import ForcastWeather from './components/ForcastWeather';
import Search from './components/Search';
import { KEY_WEATHER_API, URL_WEATHER_API } from './api';
import { useState } from 'react';

function App() {
  const [currWeather, setCurrWeather] = useState(null);
  const [forcast, setForcast] = useState(null);

  const searchChangeHandler = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const fetchCurrWeather = await fetch(`${URL_WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${KEY_WEATHER_API}&units=metric`);
    const fetchForcast = await fetch(`${URL_WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${KEY_WEATHER_API}&units=metric`);
    const currWeatherData = await fetchCurrWeather.json();
    const forcastData = await fetchForcast.json();
    console.log(currWeather);
    console.log(forcast);

    setCurrWeather({ city: searchData.label, ...currWeatherData });
    setForcast({ city: searchData.label, ...forcastData });
  }
  return <div className="container">
    <section className="left">
      <Search onSearchChange={searchChangeHandler} />
      {currWeather && <CurrentWeather data={currWeather} />}
    </section>
    <section className="right">
      {forcast && <ForcastWeather data={forcast} />}
    </section>
  </div>;
}

export default App;
