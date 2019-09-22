import React from "react";
import City from "../../molecules/city";
import SearchBox from "../../molecules/search-box";
import WeatherFooter from "../../molecules/weather-footer";
import Footer from "../../organisms/footer";

const Weather = props => {
  const { setCity, getWeatherData, weatherObj, handleKeyDown } = props;
  return (
    <>
      <City weatherObj={weatherObj} />
      <WeatherFooter weatherObj={weatherObj} />
      <SearchBox
        setCity={setCity}
        getWeatherData={getWeatherData}
        handleKeyDown={handleKeyDown}
      />
      <Footer />
    </>
  );
};

export default Weather;
