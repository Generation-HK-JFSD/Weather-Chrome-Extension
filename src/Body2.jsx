import { useEffect, useState } from 'react';
import API_PATHS from './constants/api';
import WeatherIcon from './WeatherIcon';
import NewWeatherByLocation from './NewWeatherByLocation';
import Data from './Data';

function Body2() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(API_PATHS.Current_Weather_Report)
      .then((res) => {
        // console.log('res', res);
        return res.json();
      })
      .then((json) => {
        console.log('json', json);
        setWeatherData(json);
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
    <div className='flex justify-between items-center gap-6'>
      <div className='flex-grow flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <select
            className='self-start bg-[rgba(0,0,0,0.1)] rounded-lg px-3 py-2 border-r-12 border-transparent text-2xl'
            name='districts'
            id='districts'
          >
            <optgroup label='香港島'>
              <option value='中西區'>中西區</option>
              <option value='東區'>東區</option>
              <option value='南區'>南區</option>
              <option value='灣仔'>灣仔</option>
            </optgroup>
            <optgroup label='九龍'>
              <option value='油尖旺'>油尖旺</option>
              <option value='深水埗'>深水埗</option>
              <option value='九龍城'>九龍城</option>
              <option value='黃大仙'>黃大仙</option>
              <option value='觀塘'>觀塘</option>
            </optgroup>
            <optgroup label='新界'>
              <option value='葵青'>葵青</option>
              <option value='離島區'>離島區</option>
              <option value='北區'>北區</option>
              <option value='西貢'>西貢</option>
              <option value='沙田'>沙田</option>
              <option value='大埔'>大埔</option>
              <option value='荃灣'>荃灣</option>
              <option value='屯門'>屯門</option>
              <option value='元朗'>元朗</option>
            </optgroup>
          </select>
          <div className='flex items-center gap-1 px-4'>
            <p className='text-5xl'>24</p>
            <p className='text-2xl'>°C</p>
          </div>
        </div>

        <div className='grid grid-cols-2 grid-rows-2 gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg'>
          <Data param='相對濕度' value={humidityValue} unit='%' />
          <Data param='雨量' value='0' unit='mm' />
          <Data param='紫外線指數' value={uvLine} unit='高' />
          <Data param='空氣污染指數' value='9' unit='甚高' />
        </div>
      </div>
      {/* <i className='wi wi-day-cloudy text-[168px] px-3 py-12 opacity-20'></i> */}
      <WeatherIcon iconNum={weatherData?.icon} className='w-50' />
    </div>
  );
}

export default Body2;
