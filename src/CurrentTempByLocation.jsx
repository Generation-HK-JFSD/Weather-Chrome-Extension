import { useEffect, useState } from 'react';
import API_PATHS from './constants/api';
import Select from './HTML_Select';
import Rainfall from './Rainfall';

function CurrentTempByLocation() {
  // json obj of current weather api response
  const [currentWeather, setCurrentWeatherRes] = useState({});
  // location temp array from current weather api response
  const [locationOptions, setLocationOptions] = useState([]);
  // the value of selected option of location
  const [selectedLocation, setSelectedLocation] = useState('');

  function locationOnChangeHandler(e) {
    // console.log('inside on change handler');
    // console.log('selected location:', e.target.value);
    setSelectedLocation(e.target.value);
  }

  useEffect(() => {
    fetch(API_PATHS.Current_Weather_Report)
      .then((res) => {
        // console.log('response', res);
        return res.json();
      })
      .then((json) => {
        // console.log('response json', json);
        setCurrentWeatherRes(json);

        let temperatureDataArr = json.temperature.data;
        // console.log('temperatureDataArr', temperatureDataArr);
        setLocationOptions(temperatureDataArr);
        // make Temperature display value instead of "N/A"
        setSelectedLocation(temperatureDataArr[0].place);
      });
  }, []);

  // console.log('currentWeatherRes', currentWeatherRes);

  let tempOfSelectedLocation;

  if (currentWeather.temperature !== undefined) {
    // console.log(
    //   'currentWeather.temperature.data',
    //   currentWeather.temperature.data
    // );
    // console.log('selectedLocation', selectedLocation);
    let locationTempsFiltered = currentWeather.temperature.data.filter(
      (el) => el.place === selectedLocation
    );
    // console.log('locationTempsFiltered', locationTempsFiltered);
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

export default CurrentTempByLocation;
