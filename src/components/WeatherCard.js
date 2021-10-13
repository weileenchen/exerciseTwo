import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard({
  city = "Unknown",
  cloudiness = "Unknown",
  currentTemp = "Unknown",
  highTemp = "Unknown",
  humidity = "Unknown",
  lowTemp = "Unknown",
  weatherType = "Unknown",
  windSpeed = "Unknown",
}) {
  return (
    <section
      className="WeatherCard"
      style={{
        backgroundColor: `rgba(174, 198, 207, ${cloudiness / 100})`,
      }}
    >
      <h1 className="City">{city}</h1>
      <div className="WeatherCardInfo">
        <div className="WeatherCardMain">
          <div className="CurrentTemperatureWrapper">
            <p>
              <strong>{currentTemp}&deg;</strong>
            </p>
            <h2 className="">Feels Like</h2>
          </div>
          <div class="WeatherImageWrapper">
            <WeatherImage weatherType={weatherType} />
          </div>
        </div>
        <div className="WeatherDetails">
          <p>
            Weather:{" "}
            <strong>{weatherType === "Clouds" ? "Cloudy" : weatherType}</strong>
          </p>
          <p>
            Highest Temperature: <strong>{highTemp}&deg;</strong>
          </p>
          <p>
            Lowest Temperature: <strong>{lowTemp}&deg;</strong>
          </p>
          <p>
            Cloudiness: <strong>{cloudiness}%</strong>
          </p>
          <p>
            Humidity: <strong>{humidity}%</strong>
          </p>
          <p>
            Wind Speed: <strong>{windSpeed} mph</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;
