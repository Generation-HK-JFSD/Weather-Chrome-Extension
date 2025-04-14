import { useEffect, useState } from 'react';
import API_PATHS from './constants/api';
import Select from './HTML_Select';
import Rainfall from './Rainfall';

function WeatherByLocation({ currentWeather = {} }) {
  if (!currentWeather) currentWeather = {};

  const [selectedLocation, setSelectedLocation] = useState('');

  function locationOnChangeHandler(e) {
    setSelectedLocation(e.target.value);
  }

  useEffect(() => {
    if (currentWeather.temperature !== undefined) {
      setSelectedLocation(currentWeather.temperature.data[0].place);
    }
  }, [currentWeather]);

  let temperatureDataArr;
  let locationOptions;
  let tempOfSelectedLocation;

  if (currentWeather.temperature !== undefined) {
    temperatureDataArr = currentWeather.temperature.data;
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

  return (
    <div>
      select location to see temp of the location: <br />
      <Select
        options={locationOptions}
        name='locationSelect'
        onChangeHandler={locationOnChangeHandler}
        selectedValue={selectedLocation}
      />
      <p>Temperature: {tempOfSelectedLocationDisplay}</p>
      <Rainfall
        rainData={currentWeather.rainfall?.data}
        selectedLocation={selectedLocation}
      />
    </div>
  );
}

export default WeatherByLocation;
