import { useEffect, useState } from 'react';
import API_PATHS from './constants/api';

function CurrentWeather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(API_PATHS.Current_Weather_Report)
      .then((res) => {
        console.log('res', res);
        return res.json();
      })
      .then((obj) => {
        console.log('obj', obj);
        setWeatherData(obj);
      });
  }, []);

  // let { uvindex, humidity, updateTime } = weatherData;
  let uvindex = weatherData?.uvindex;
  let humidity = weatherData?.humidity;
  let updateTime = weatherData?.updateTime ?? 'No Data';

  let uvLine = 'No Data';
  let uvMsg = 'No Data';
  let humidityValue = 'No Data';

  let warningMessage = weatherData?.warningMessage;
  let rainstormReminder = weatherData?.rainstormReminder;

  if (uvindex) {
    uvLine = `${uvindex.data[0].value} ${uvindex.data[0].desc}`;
    uvMsg = uvindex.data[0].message;
  }
  if (humidity) {
    humidityValue = humidity.data[0].value;
  }

  return (
    <>
      <div id='temp'>
        {weatherData &&
          weatherData.temperature.data.map((el, idx) => {
            return (
              <p key={idx}>
                {el.place}: {el.value}°C
              </p>
            );
          })}
      </div>
      <div id='uvindex'>
        <h2>UV Index</h2>
        <p>UV Index Value: {uvLine}</p>
        <p>UV Message: {uvMsg}</p>
      </div>
      <div>
        <p>Humidity: {humidityValue}</p>
      </div>
      <div>
        <p>Warning Message: {warningMessage}</p>
        <p>rainstormReminder: {rainstormReminder}</p>
      </div>
      <div>
        <p>Update Time: {updateTime}</p>
      </div>
    </>
  );
}

export default CurrentWeather;
