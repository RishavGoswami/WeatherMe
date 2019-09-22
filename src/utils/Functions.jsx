var Obj = {};

export function WeatherObj(weatherReport) {
  Obj = {
    cityName: weatherReport.name,
    country: weatherReport.sys.country,
    date: weatherReport.dt,
    sunrise: weatherReport.sys.sunrise,
    sunset: weatherReport.sys.sunset,
    weather: {
      temperature: weatherReport.main.temp,
      pressure: weatherReport.main.pressure,
      humidity: weatherReport.main.humidity,
      max: weatherReport.main.temp_max,
      min: weatherReport.main.temp_min
    },
    coordinates: {
      lat: weatherReport.coord.lat,
      lon: weatherReport.coord.lon
    },
    visibility: weatherReport.visibility,
    atmosphere: {
      type: weatherReport.weather[0].main,
      description: weatherReport.weather[0].description
    },
    wind: {
      speed: weatherReport.wind.speed,
      degree: weatherReport.wind.deg
    },
    clouds: weatherReport.clouds.all
  };
  return Obj;
}

export const setWeatherReport = () => {
  return
};
