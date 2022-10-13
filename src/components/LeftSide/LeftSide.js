import React from "react";
import axios from "axios";
import { APIKey } from "../../common/apis/weatherAPIKey";
import "./LeftSide.scss";
import Cloud from '../../icons/Clouds.png'
import Clear from '../../icons/Clear.png'
import Rain from '../../icons/Rain.png'
const weatherIcon = {
  'Clouds' : Cloud,
  'Clear' :  Clear,
  'Rain' : Rain
}
const LeftSide = ({ weather, setCity, city, setWeather,country,setCountry }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIKey}`
    ).then(res => {
      setCountry(res.data);
      return [res.data[0].lat,res.data[0].lon]
    }).then((data) => axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0]}&lon=${data[1]}&exclude=minutely,alerts&appid=${APIKey}`))
    .then(res => {
      setWeather(res.data)
    })
    setCity("");
  };
 
  var time = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return (
    <div className="left-side__wrapper">
      <form className="weather__search-box" value={city} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
      <div className="weather__content">
        <img
          src={weatherIcon[weather?.current?.weather[0]?.main]}
          alt=""
        />
        <div className="fs-2 fw-bold lh-sm">{country[0]?.name}</div>
        <div className="fs-1 fw-bold">
          {(weather?.current?.temp - 273).toFixed(2)}°C
        </div>
        <div className="fs-4 fw-semibold">
        {weekday[time.getDay()]}, {time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </div>
        <div className="fs-6 lh-base text-capitalize text-muted mb-3">
          <span className="fw-semibold">
            {weather?.current?.weather[0]?.description}
          </span>
          <br />
          <span className="fw-semibold">
            {weather?.current?.weather[0]?.main} {weather?.current?.clouds}%
          </span>
        </div>
        <div className="weather__destination-img">
          <img
            className="img-fluid"
            src="https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6"
            alt=""
          />
          <div className="weather__destination text-white fw-bold fs-5">
            {country[0]?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
