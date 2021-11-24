import React from "react";
import sunny from "./Images/01.png";
import clouds from "./Images/02.png";
import cloudy from "./Images/03.png";
import rainy from "./Images/04.png";
import thunder from "./Images/05.png";
import snow from "./Images/06.png";
import windy from "./Images/07.png";

export default function Image(props) {
  switch (props.icon) {
    case "01d":
    case "01n":
      return <img src={sunny} alt="" className="weatherImage" />;

    case "02d":
    case "02n":
      return <img src={clouds} alt=" " className="weatherImage" />;

    case "03d":
    case "03n":
    case "04n":
    case "04d":
      return <img src={cloudy} alt=" " className="weatherImage" />;

    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return <img src={rainy} alt=" " className="weatherImage" />;

    case "11d":
    case "11n":
      return <img src={thunder} alt="" className="weatherImage" />;

    case "13d":
    case "13n":
      return <img src={snow} alt="" className="weatherImage" />;

    case "50d":
    case "50n":
      return <img src={windy} alt="" className="weatherImage" />;

    default:
      return <img src={windy} alt="" className="weatherImage" />;
  }
}
