import React, { useState, useEffect } from "react";

const WeatherComponent = () => {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);
  const [inputCity, setInputCity] = useState("");

  useEffect(() => {
    if (cityName === "") return; // Prevent initial fetch with empty city name

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b23a9bc286a713781962878a324a1a0b`
        );
        const weatherData = await response.json();
        setWeather(weatherData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, [cityName]); // Re-fetch weather data when cityName changes

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(inputCity);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather ? (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p><br></br>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WeatherComponent;
