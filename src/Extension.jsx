import "./App.css";
import Data from "./Data";
import ForecastRow from "./ForecastRow";
import "./weather-icons.min.css";
import "./assets/warning-symbols/hot.png";

function Extension() {
  return (
    <div className="w-[600px] h-[600px] bg-[#397326] p-6 flex flex-col gap-6 ">
      <div className="flex justify-between gap-6">
        <p className="text-2xl flex-grow text-left">
          部分時間有陽光。吹和緩偏東風。
        </p>
        {/* <p className="bg-[rgba(0,0,0,0.1)] rounded-lg px-2 py-1">English</p> */}
      </div>
      <div className="flex justify-between items-center gap-6">
        <div className="flex-grow flex flex-col gap-4">
          {/* <div className="grid grid-cols-2 items-center gap-4"> */}
          <div className="flex flex-col gap-1">
            {/* <div className="flex self-start items-center gap-1 bg-[rgba(0,0,0,0.1)] rounded-lg px-2 py-1">
              <p className="text-2xl text-left">青衣</p>
              <ChevronDown />
            </div> */}
            <select
              className="self-start bg-[rgba(0,0,0,0.1)] rounded-lg px-3 py-2 border-r-12 border-transparent text-2xl"
              name="districts"
              id="districts"
            >
              <div className="text-black">
                <optgroup label="香港島">
                  <option value="中西區">中西區</option>
                  <option value="東區">東區</option>
                  <option value="南區">南區</option>
                  <option value="灣仔">灣仔</option>
                </optgroup>
                <optgroup label="九龍">
                  <option value="油尖旺">油尖旺</option>
                  <option value="深水埗">深水埗</option>
                  <option value="九龍城">九龍城</option>
                  <option value="黃大仙">黃大仙</option>
                  <option value="觀塘">觀塘</option>
                </optgroup>
                <optgroup label="新界">
                  <option value="葵青">葵青</option>
                  <option value="離島區">離島區</option>
                  <option value="北區">北區</option>
                  <option value="西貢">西貢</option>
                  <option value="沙田">沙田</option>
                  <option value="大埔">大埔</option>
                  <option value="荃灣">荃灣</option>
                  <option value="屯門">屯門</option>
                  <option value="元朗">元朗</option>
                </optgroup>
              </div>
            </select>
            <div className="flex items-center gap-1 px-4">
              <p className="text-5xl">24</p>
              <p className="text-2xl">°C</p>
            </div>
          </div>
          {/* <div className="grow flex flex-col">
              <p className="text-xl text-left">體感氣溫</p>
              <div className="flex items-center gap-1">
                <p className="text-2xl">19</p>
                <p className="text-base">°C</p>
              </div>
            </div> */}
          {/* </div> */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg">
            <Data param="相對濕度" value="24" unit="%" />
            <Data param="雨量" value="0" unit="mm" />
            <Data param="紫外線指數" value="7" unit="高" />
            <Data param="空氣污染指數" value="9" unit="甚高" />
            {/* <Data param="風速" value="18" unit="km/h" /> */}
          </div>
        </div>
        <i className="wi wi-day-cloudy text-[168px] px-3 py-12 opacity-20"></i>
      </div>
      <div className="flex flex-col gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg">
        <div className="flex gap-4 item-center">
          <img src="./assets/warning-symbols/hot.png"></img>
          <p>香港天文台在下午1時45分發出酷熱天氣警告。</p>
        </div>
        <div className="flex gap-4 item-center">
          <img src="./assets/warning-symbols/hot.png"></img>
          <p>現時之火災危險警告為紅色，表示火災危險性極高。</p>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <p>更新時間: 2025年4月7日 16:00</p>
        <p className="bg-[rgba(0,0,0,0.1)] px-2 py-1 rounded-lg">香港天文台</p>
        <p className="bg-[rgba(0,0,0,0.1)] px-2 py-1 rounded-lg">環境保護署</p>
      </div>
      <div className="grid grid-rows-10 gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg">
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-left">未來九天</div>
          <div className="text-left">氣溫</div>
          <div className="text-left">相對濕度</div>
          <div className="text-left">顯著降雨概率</div>
        </div>
        <ForecastRow
          day="星期二"
          icon="day-cloudy"
          minTemp="20"
          maxTemp="25"
          minRH="60"
          maxRH="90"
          PSR="<30"
        />
        <ForecastRow
          day="星期二"
          icon="day-cloudy"
          minTemp="20"
          maxTemp="25"
          minRH="60"
          maxRH="90"
          PSR="<30"
        />
        <ForecastRow
          day="星期二"
          icon="day-cloudy"
          minTemp="20"
          maxTemp="25"
          minRH="60"
          maxRH="90"
          PSR="<30"
        />
        <ForecastRow
          day="星期二"
          icon="day-cloudy"
          minTemp="20"
          maxTemp="25"
          minRH="60"
          maxRH="90"
          PSR="<30"
        />
        <ForecastRow
          day="星期二"
          icon="day-cloudy"
          minTemp="20"
          maxTemp="25"
          minRH="60"
          maxRH="90"
          PSR="<30"
        />
        <ForecastRow
          day="星期二"
          icon="day-cloudy"
          minTemp="20"
          maxTemp="25"
          minRH="60"
          maxRH="90"
          PSR="<30"
        />
        <ForecastRow
          day="星期二"
          icon="day-cloudy"
          minTemp="20"
          maxTemp="25"
          minRH="60"
          maxRH="90"
          PSR="<30"
        />
        <ForecastRow
          day="星期二"
          icon="day-cloudy"
          minTemp="20"
          maxTemp="25"
          minRH="60"
          maxRH="90"
          PSR="<30"
        />
        <ForecastRow
          day="星期二"
          icon="day-cloudy"
          minTemp="20"
          maxTemp="25"
          minRH="60"
          maxRH="90"
          PSR="<30"
        />
      </div>
    </div>
  );
}

export default Extension;
