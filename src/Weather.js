import React, { useState } from "react";
import axios from "axios";
import Image from "./Image";

export default function Weather() {
  let [city, setCity] = useState("");
  let [stats, setStats] = useState("");
  let apiKey = "ffeb16c2d5b651aa562f048e606b7089";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(showData);
  }

  function handleUpdate(event) {
    if (event.target.value !== "") {
      setCity(event.target.value);
    } else {
      setCity("");
      setStats("");
    }
  }

  function showData(response) {
    setStats([
      response.data.main.temp,
      response.data.main.humidity,
      response.data.wind.speed,
      response.data.weather[0].description,
      response.data.weather[0].icon,
    ]);
  }

  function display() {
    if (stats !== "") {
      return (
        <ul>
          <li>Temperature: {Math.round(stats[0])}°C</li>
          <li>Humidity: {stats[1]}%</li>
          <li>Wind: {Math.round(stats[2])} km/h</li>
          <li>Description: {stats[3]}</li>
          <Image icon={stats[4]} />
        </ul>
      );
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={handleUpdate}
          className="searchbar"
        />
        <input type="submit" value="Search" className="searchbar" />
      </form>
      {display()}
    </div>
  );
}
