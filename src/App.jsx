import './App.css';
import CurrentWeather from './CurrentWeather';
import CurrentTempByLocation from './CurrentTempByLocation';
// import Test from './Test';

function App() {
  return (
    <>
      <CurrentTempByLocation />
      <hr />
      <CurrentWeather />
      {/* <Test /> */}
    </>
  );
}

export default App;
