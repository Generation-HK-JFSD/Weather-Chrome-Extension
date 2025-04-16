import { useEffect, useState } from 'react';
import API_PATHS from './constants/api';
import WeatherIcon from './WeatherIcon';
import Data from './Data';
import Select from './HTML_Select';
import helper from './utils/helper';

function Body2() {
  const [weatherData, setWeatherData] = useState({});
  const [AQHI_Data, setAQHI_Data] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  function locationOnChangeHandler(e) {
    setSelectedLocation(e.target.value);
  }

  function getRainfall(weatherData, selectedLocation) {
    let rainfall = '--';
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
  let tempOfSelectedLocation = '--';
  let aqhi = '-';
  let qahi_healthRisk = '-';

  useEffect(() => {
    fetch(API_PATHS.Current_Weather_Report)
      .then((res) => {
        // console.log('res', res);
        return res.json();
      })
      .then((json) => {
        console.log('Current Weather Report json', json);
        setWeatherData(json);
      });

    fetch(API_PATHS.AQHI_of_Individual)
      .then((res) => res.json())
      .then((json) => {
        console.log('Air Quality json', json);
        setAQHI_Data(json);
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
  let tempOfSelectedLocationDisplay =
    tempOfSelectedLocation === '--' ? '--' : `${tempOfSelectedLocation} °C`;

  // let { uvindex, humidity, updateTime } = weatherData;
  let uvindex = weatherData?.uvindex;
  let humidity = weatherData?.humidity;
  let updateTimeDisplay = weatherData?.updateTime
    ? new Date(weatherData.updateTime).toLocaleString('zh-HK')
    : '未有更新';

  let uvLine = '--';
  let uvValue = '--';
  let uvLevel = '';
  let uvMsg = '--';
  let humidityValue = '--';

  // warningMessage from response will be either array of string or ""
  let warningMessages = weatherData?.warningMessage;
  let rainstormReminder = weatherData?.rainstormReminder;
  let showWarningMessages =
    Array.isArray(warningMessages) && warningMessages.length > 0;

  if (uvindex) {
    uvLine = `${uvindex.data[0].value} ${uvindex.data[0].desc}`;
    uvValue = uvindex.data[0].value;
    uvLevel = uvindex.data[0].desc;
    uvMsg = uvindex.data[0].message;
  }
  if (humidity) {
    humidityValue = humidity.data[0].value;
  }

  if (Array.isArray(AQHI_Data) && AQHI_Data.length > 0) {
    let filtered = AQHI_Data.filter(
      (el) =>
        el.station ===
        helper.nearestAirQualityMonitoringLocation(selectedLocation)
    );
    if (filtered.length > 0) {
      aqhi = filtered[0].aqhi;
      qahi_healthRisk = helper.qahi_healthRiskToChinese(
        filtered[0].health_risk
      );
    }
  }

  return (
    <>
      <div className='grid grid-cols-5 items-center gap-6'>
        <div className='col-span-3 flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <Select
              options={locationOptions}
              onChangeHandler={locationOnChangeHandler}
              selectedValue={selectedLocation}
              className='self-start bg-[rgba(0,0,0,0.1)] rounded-lg px-3 py-2 border-r-12 border-transparent text-2xl'
            />

            <div className='flex items-center gap-1 px-4'>
              <p className='text-4xl'>{tempOfSelectedLocation}</p>
              <p className='text-2xl'>°C</p>
            </div>
          </div>

          <div className='grid grid-cols-2 grid-rows-2 gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg'>
            <Data param='相對濕度' value={humidityValue} unit='%' />
            <Data param='雨量' value={maxRainfallDisplay} unit='mm' />
            <Data param='紫外線指數' value={uvValue} unit={uvLevel} />
            <Data param='空氣污染指數' value={aqhi} unit={qahi_healthRisk} />
          </div>
        </div>
        <WeatherIcon
          iconNum={weatherData?.icon}
          className='col-span-2 filter grayscale opacity-40'
        />
      </div>

      {/* TODO display correct icon for warning messages */}
      {showWarningMessages && (
        <div className='flex flex-col gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg'>
          {warningMessages.map((el) => {
            <div className='flex gap-4 item-center'>
              <img src='./assets/warning-symbols/hot.png'></img>
              <p>{el}</p>
            </div>;
          })}
        </div>
      )}

      <div className='flex gap-4 justify-center items-center text-sm'>
        <p>更新時間: {updateTimeDisplay}</p>
        <p className='bg-[rgba(0,0,0,0.1)] px-2 py-1 rounded-lg'>香港天文台</p>
        <p className='bg-[rgba(0,0,0,0.1)] px-2 py-1 rounded-lg'>環境保護署</p>
      </div>
    </>
  );
}

export default Body2;
