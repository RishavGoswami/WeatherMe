import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../../constants/Constants";
import Video from "../atoms/video";

//Import background videos
import sunny_mp4 from "../../assets/videos/Sunny.mp4";
import sunny_webm from "../../assets/videos/Sunny.webm";

import Weather from "../organisms/weather";

import { WeatherObj } from "../../utils/Functions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedCity: "delhi",
      weatherReport: null
    };
    this.setCity = this.setCity.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData() {
    axios
      .get(
        `${baseUrl}/weather?APPID=ea4a711d209edbf43f3b367871a1edc8&units=imperial&q=${
          this.state.searchedCity
        }`
      )
      .then(result => this.setState({ weatherReport: result.data }));
  }

  setCity(e) {
    this.setState({ searchedCity: e.target.value });
  }

  _handleKeyDown(e) {
    if (e.key === "Enter") {
      this.getWeatherData();
    }
  }

  render() {
    const { weatherReport } = this.state;
    if (!weatherReport) {
      return null;
    }
    return (
      <>
        <div style={{ position: "fixed" }}>
          <Weather
            weatherObj={WeatherObj(weatherReport)}
            setCity={this.setCity}
            getWeatherData={this.getWeatherData}
            handleKeyDown={this._handleKeyDown}
          />
          <Video source_mp4={sunny_mp4} source_webm={sunny_webm} />
          <div className="overlay" />
        </div>
      </>
    );
  }
}

export default HomePage;
