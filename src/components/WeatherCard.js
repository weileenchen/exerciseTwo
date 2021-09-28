import React from "react";

function WeatherCard({
  cloudiness = "Unknown",
  currentTemp = "Unknown",
  highTemp = "Unknown",
  humidity = "Unknown",
  lowTemp = "Unknown",
  weatherType = "Unknown",
  windSpeed = "Unknown",
}) {
  return (
    <section className="WeatherCard">
      <p>
        WeatherType: <strong>{weatherType}</strong>
      </p>
      <p>
        Current Temperature: <strong>{currentTemp}</strong>
      </p>
      <p>
        Highest Temperature: <strong>{highTemp}</strong>
      </p>
      <p>
        Lowest Temperature: <strong>{lowTemp}</strong>
      </p>
      <p>
        Cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        Humidity: <strong>{humidity}</strong>
      </p>
      <p>
        Wind Speed: <strong>{windSpeed}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
