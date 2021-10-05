import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faCloud,
  faSun,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";

function WeatherImage({ weatherType }) {
  var wIcon;
  switch (weatherType) {
    case "Clouds":
      return (
        <div>
          <FontAwesomeIcon icon={faCloud} />
        </div>
      );
    case "Windy":
      return (
        <div>
          <FontAwesomeIcon icon={faWind} />
        </div>
      );
    case "Rain" || "Thunderstorms":
      return (
        <div>
          <FontAwesomeIcon icon={faCloudRain} />
        </div>
      );
    case "Sunny":
      return (
        <div>
          <FontAwesomeIcon icon={faSun} />
        </div>
      );
    default:
      return (
        <div>
          <FontAwesomeIcon icon={faCloud} />
        </div>
      );
  }
}

export default WeatherImage;
