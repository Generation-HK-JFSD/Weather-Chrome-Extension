import './App.css';
import Data from './Data';
import ForecastRow from './ForecastRow';
import './assets/warning-symbols/hot.png';
import Body2 from './Body2';
import NineDayWeatherForecast from './NineDayWeatherForecast';

function Extension() {
  return (
    <div className='bg-[#397326] p-6 flex flex-col gap-4 '>
      // TODO add refresh button. add auto refresh
      <div className='flex justify-between gap-6'>
        <p className='text-2xl flex-grow text-left'>
          部分時間有陽光。吹和緩偏東風。
        </p>
        {/* <p className="bg-[rgba(0,0,0,0.1)] rounded-lg px-2 py-1">English</p> */}
      </div>
      <Body2 />
      <NineDayWeatherForecast />
    </div>
  );
}

export default Extension;
