import { useEffect, useState } from 'react';
import API_PATHS from './constants/api';
import helper from './utils/helper';
import ForecastRow from './ForecastRow';
import pathHelper from './utils/path';

function NineDayWeatherForecast() {
  function psrToNumber(psr) {
    if (psr === '高') {
      return '>=70';
    } else if (psr === '中高') {
      return '55-69';
    } else if (psr === '中') {
      return '45-54';
    } else if (psr === '中低') {
      return '30-44';
    } else if (psr === '低') {
      return '<30';
    }

    return '--';
  }

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

  return (
    <div className='grid grid-rows-10 gap-2 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg'>
      <div className='grid grid-cols-4 gap-4 items-center text-sm'>
        <div className='text-left'>未來九天</div>
        <div className='text-left'>氣溫</div>
        <div className='text-left'>相對濕度</div>
        <div className='text-left'>顯著降雨概率</div>
      </div>
      {weatherForecastData.map((el) => {
        const {
          forecastDate,
          week,
          ForecastIcon,
          forecastMintemp,
          forecastMaxtemp,
          forecastMinrh,
          forecastMaxrh,
          PSR,
        } = el;
        return (
          <ForecastRow
            key={forecastDate}
            day={week}
            iconPath={pathHelper.getIconFullPath(ForecastIcon)}
            minTemp={forecastMintemp.value}
            maxTemp={forecastMaxtemp.value}
            minRH={forecastMinrh.value}
            maxRH={forecastMaxrh.value}
            PSR={psrToNumber(PSR)}
          />
        );
      })}
    </div>
  );
}

export default NineDayWeatherForecast;
