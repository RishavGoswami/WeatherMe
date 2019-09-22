import React from "react";
import Image from "../../atoms/image";
import Label from "../../atoms/label";

import "./WeatherFooter-style.scss";

import date from "../../../assets/icons/clock.svg";
import sunrise from "../../../assets/icons/sunrise.svg";
import sunset from "../../../assets/icons/sunset.svg";
import visibility from "../../../assets/icons/visibility.svg";

import formatDate from "moment";

const WeatherFooter = props => {
  const { weatherObj } = props;
  console.log("weatherObj:", weatherObj);
  const obj = [
    {
      title: "Date",
      value: formatDate
        .unix(weatherObj.date)
        .format("ddd, Do, MMM YYYY"),
      image: date
    },
    {
      title: "Sunrise",
      value: formatDate.unix(weatherObj.sunrise).format("h:mm A"),
      image: sunrise
    },
    {
      title: "Sunset",
      value: formatDate.unix(weatherObj.sunset).format("h:mm A"),
      image: sunset
    },
    {
      title: "Visibility",
      value: `${weatherObj.visibility / 1000} km`,
      image: visibility
    }
  ];
  return (
    <>
      <div className="footerContainer" id="row">
        {obj.map((title, i) => {
          return (
            <div key={i} id="row" className="alignCenter ml25">
              <Image
                image={title.image}
                className="footer_icon"
                title={title.title}
              />
              <Label text={title.value} className="whiteText" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeatherFooter;
