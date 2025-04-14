import './App.css';
import CurrentWeather from './CurrentWeather';
import WeatherByLocation from './WeatherByLocation';
// import Test from './Test';

function App() {
  return (
    <>
      <WeatherByLocation />
      <hr />
      <CurrentWeather />
      {/* <Test /> */}
    </>
  );
}

export default App;
