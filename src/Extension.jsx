import './App.css';
import Body2 from './Body2';
import NineDayWeatherForecast from './NineDayWeatherForecast';

function Extension() {
  return (
    <div id='extension' className='bg-[#4c4c4c] p-6 flex flex-col gap-4 '>
      <Body2 />
      <NineDayWeatherForecast />
    </div>
  );
}

export default Extension;
