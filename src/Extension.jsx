import './App.css';
import Data from './Data';
import ForecastRow from './ForecastRow';
import './weather-icons.min.css';
import './assets/warning-symbols/hot.png';
import Body2 from './Body2';

function Extension() {
  return (
    <div className='w-[600px] h-[600px] bg-[#397326] p-6 flex flex-col gap-6 '>
      <div className='flex justify-between gap-6'>
        <p className='text-2xl flex-grow text-left'>
          部分時間有陽光。吹和緩偏東風。
        </p>
        {/* <p className="bg-[rgba(0,0,0,0.1)] rounded-lg px-2 py-1">English</p> */}
      </div>

      <Body2 />

      <div className='grid grid-rows-10 gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg'>
        <div className='grid grid-cols-4 gap-4 items-center'>
          <div className='text-left'>未來九天</div>
          <div className='text-left'>氣溫</div>
          <div className='text-left'>相對濕度</div>
          <div className='text-left'>顯著降雨概率</div>
        </div>
        <ForecastRow
          day='星期二'
          icon='day-cloudy'
          minTemp='20'
          maxTemp='25'
          minRH='60'
          maxRH='90'
          PSR='<30'
        />
        <ForecastRow
          day='星期二'
          icon='day-cloudy'
          minTemp='20'
          maxTemp='25'
          minRH='60'
          maxRH='90'
          PSR='<30'
        />
        <ForecastRow
          day='星期二'
          icon='day-cloudy'
          minTemp='20'
          maxTemp='25'
          minRH='60'
          maxRH='90'
          PSR='<30'
        />
        <ForecastRow
          day='星期二'
          icon='day-cloudy'
          minTemp='20'
          maxTemp='25'
          minRH='60'
          maxRH='90'
          PSR='<30'
        />
        <ForecastRow
          day='星期二'
          icon='day-cloudy'
          minTemp='20'
          maxTemp='25'
          minRH='60'
          maxRH='90'
          PSR='<30'
        />
        <ForecastRow
          day='星期二'
          icon='day-cloudy'
          minTemp='20'
          maxTemp='25'
          minRH='60'
          maxRH='90'
          PSR='<30'
        />
        <ForecastRow
          day='星期二'
          icon='day-cloudy'
          minTemp='20'
          maxTemp='25'
          minRH='60'
          maxRH='90'
          PSR='<30'
        />
        <ForecastRow
          day='星期二'
          icon='day-cloudy'
          minTemp='20'
          maxTemp='25'
          minRH='60'
          maxRH='90'
          PSR='<30'
        />
        <ForecastRow
          day='星期二'
          icon='day-cloudy'
          minTemp='20'
          maxTemp='25'
          minRH='60'
          maxRH='90'
          PSR='<30'
        />
      </div>
    </div>
  );
}

export default Extension;
