import './App.css';
import './assets/warning-symbols/hot.png';
import Body2 from './Body2';
import NineDayWeatherForecast from './NineDayWeatherForecast';

function Extension() {
  return (
    <div className='bg-[#397326] p-6 flex flex-col gap-4 '>
      <Body2 />
      <NineDayWeatherForecast />
    </div>
  );
}

export default Extension;
