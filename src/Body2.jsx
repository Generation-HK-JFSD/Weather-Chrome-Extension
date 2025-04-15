import { useEffect, useState } from 'react';
import API_PATHS from './constants/api';
import WeatherIcon from './WeatherIcon';
import NewWeatherByLocation from './NewWeatherByLocation';
import Data from './Data';
import Select from './HTML_Select';
import helper from './utils/helper';

function Body2() {
  const [weatherData, setWeatherData] = useState({});

  const [selectedLocation, setSelectedLocation] = useState('');

  function locationOnChangeHandler(e) {
    setSelectedLocation(e.target.value);
  }

  function getRainfall(weatherData, selectedLocation) {
    let rainfall = 'No Data';
    let rainData = weatherData.rainfall?.data;

    if (rainData) {
      let filter = rainData.filter(
        (el) => el.place === helper.districtToArea(selectedLocation)
      );

      if (filter.length === 1) {
        if (filter[0].main === 'TRUE') {
          rainfall = 'Under Maintenance';
        } else {
          rainfall = filter[0].max;
        }
      }
    }

    return rainfall;
  }

  let maxRainfallDisplay = getRainfall(weatherData, selectedLocation);
  let temperatureDataArr;
  let locationOptions;
  let tempOfSelectedLocation;

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

  useEffect(() => {
    if (weatherData.temperature !== undefined) {
      setSelectedLocation(weatherData.temperature.data[0].place);
    }
  }, [weatherData]);

  if (weatherData.temperature !== undefined) {
    temperatureDataArr = weatherData.temperature.data;
    locationOptions = temperatureDataArr;

    let locationTempsFiltered = temperatureDataArr.filter(
      (el) => el.place === selectedLocation
    );

    if (locationTempsFiltered.length === 1) {
      tempOfSelectedLocation = locationTempsFiltered[0].value;
    }
  }
  let tempOfSelectedLocationDisplay = tempOfSelectedLocation
    ? `${tempOfSelectedLocation} °C`
    : 'N/A';

  // let { uvindex, humidity, updateTime } = weatherData;
  let uvindex = weatherData?.uvindex;
  let humidity = weatherData?.humidity;
  let updateTime = weatherData?.updateTime ?? 'No Data';

  let uvLine = 'No Data';
  let uvValue = 'N/A';
  let uvLevel = 'N/A';
  let uvMsg = 'No Data';
  let humidityValue = 'No Data';

  // warningMessage from response will be either array of string or ""
  let warningMessages = weatherData?.warningMessage;
  let rainstormReminder = weatherData?.rainstormReminder;

  if (uvindex) {
    uvLine = `${uvindex.data[0].value} ${uvindex.data[0].desc}`;
    uvValue = uvindex.data[0].value;
    uvLevel = uvindex.data[0].desc;
    uvMsg = uvindex.data[0].message;
  }
  if (humidity) {
    humidityValue = humidity.data[0].value;
  }

  return (
    <>
      <div className='flex justify-between items-center gap-6'>
        <div className='flex-grow flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <Select
              options={locationOptions}
              onChangeHandler={locationOnChangeHandler}
              selectedValue={selectedLocation}
              className='self-start bg-[rgba(0,0,0,0.1)] rounded-lg px-3 py-2 border-r-12 border-transparent text-2xl'
            />

            <div className='flex items-center gap-1 px-4'>
              <p className='text-5xl'>{tempOfSelectedLocation}</p>
              <p className='text-2xl'>°C</p>
            </div>
          </div>

          <div className='grid grid-cols-2 grid-rows-2 gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg'>
            <Data param='相對濕度' value={humidityValue} unit='%' />
            <Data param='雨量' value={maxRainfallDisplay} unit='mm' />
            <Data param='紫外線指數' value={uvValue} unit={uvLevel} />
            <Data param='空氣污染指數' value='9' unit='甚高' />
          </div>
        </div>
        {/* <i className='wi wi-day-cloudy text-[168px] px-3 py-12 opacity-20'></i> */}
        {/* TODO add css for weather icon */}
        <WeatherIcon iconNum={weatherData?.icon} className='w-50' />
      </div>

      {/* TODO Review the icon of warning messages */}
      <div className='flex flex-col gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg'>
        {Array.isArray(warningMessages) === false
          ? null
          : warningMessages.map((el) => {
              <div className='flex gap-4 item-center'>
                <img src='./assets/warning-symbols/hot.png'></img>
                <p>{el}</p>
              </div>;
            })}

        {/* ===== warning message for dummy data ===== */}
        {/* <div className='flex gap-4 item-center'>
          <img src='./assets/warning-symbols/hot.png'></img>
          <p>香港天文台在下午1時45分發出酷熱天氣警告。</p>
        </div>
        <div className='flex gap-4 item-center'>
          <img src='./assets/warning-symbols/hot.png'></img>
          <p>現時之火災危險警告為紅色，表示火災危險性極高。</p>
        </div> */}
      </div>

      <div className='flex gap-4 justify-center items-center'>
        {/* TODO format update time */}
        <p>更新時間: {updateTime}</p>
        <p className='bg-[rgba(0,0,0,0.1)] px-2 py-1 rounded-lg'>香港天文台</p>
        <p className='bg-[rgba(0,0,0,0.1)] px-2 py-1 rounded-lg'>環境保護署</p>
      </div>
    </>
  );
}

export default Body2;
