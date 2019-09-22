import React from "react";
import Image from "../../atoms/image";
import Label from "../../atoms/label";
import sunny from "../../../assets/icons/wi-day-sunny.svg";
import "./City-style.scss";

import humidity from "../../../assets/icons/humidity.svg";
import pressure from "../../../assets/icons/pressure.svg";
import wind from "../../../assets/icons/wind.svg";
import lowTemperature from "../../../assets/icons/low-temperature.svg";
import highTemperature from "../../../assets/icons/high-temperature.svg";

const City = props => {
  const { weatherObj } = props;
  const obj = [
    {
      title: "Humidity",
      value: `${weatherObj.weather.humidity} %`,
      image: humidity
    },
    {
      title: "Air Pressure",
      value: `${weatherObj.weather.pressure} PS`,
      image: pressure
    },
    {
      title: "Wind Speed",
      value: `${(weatherObj.wind.speed * 1.609).toFixed(2)} km/h`,
      image: wind
    },
    {
      title: "Max Temp",
      value: `${(((weatherObj.weather.max - 32) * 5) / 9).toFixed(0)} ℃`,
      image: highTemperature
    },
    {
      title: "Min Temp",
      value: `${(((weatherObj.weather.min - 32) * 5) / 9).toFixed(0)} ℃`,
      image: lowTemperature
    }
  ];
  const atmosphere = weatherObj.atmosphere.type;
  const cityName = weatherObj.cityName;
  const country = `, ${weatherObj.country}`;
  const temperatureInCelsius = `${(
    ((weatherObj.weather.temperature - 32) * 5) /
    9
  ).toFixed(0)} ℃`;
  const lat = `Lat : ${weatherObj.coordinates.lat}`;
  const lon = `Lon : ${weatherObj.coordinates.lon}`;
  return (
    <>
      <div className="container">
        <div id="column" className="ml25">
          <Image image={sunny} className="climate_icon" />
          <Label text={atmosphere} className="city city--climate" />
          <div id="row horizontal" className="cityWrap">
            <Label text={cityName} className="city city--city" />
            <Label text={country} className="city city--city" />
          </div>
          <Label text={lat} className="city city--coordinates" />
          <Label text={lon} className="city city--coordinates" />
          <Label
            text={temperatureInCelsius}
            className="city city--temperature mt20"
          />
        </div>
        <div>
          {obj.map((title, i) => {
            return (
              <div key={i} id="row" className="alignStart mb20 mr25">
                <Image image={title.image} className="climate_icon--small" />
                <div id="column">
                  <Label text={title.title} className="city city--title" />
                  <Label text={title.value} className="city city--value" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default City;
