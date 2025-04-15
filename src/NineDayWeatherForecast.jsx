import { useEffect, useState } from 'react';
import API_PATHS from './constants/api';
import helper from './utils/helper';

function NineDayWeatherForecast(params) {
  const [responseJson, setResponseJson] = useState({});
  let weatherForecastData = [];

  useEffect(() => {
    fetch(API_PATHS.Nine_Day_Weather_Forecase)
      .then((res) => res.json())
      .then((json) => {
        console.log('json', json);

        setResponseJson(json);
      });
  }, []);

  if (!helper.isObjectEmpty(responseJson)) {
    weatherForecastData = responseJson.weatherForecast;
  }

  let weatherForecastDiv = <div>{}</div>;

  return <div>NineDayWeatherForecast</div>;
}

export default NineDayWeatherForecast;
