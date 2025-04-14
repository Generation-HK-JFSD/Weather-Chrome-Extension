import "./App.css";
import "./weather-icons.min.css";

function Extension() {
  return (
    <div className="w-[600px] h-[600px] bg-[#397326] p-6 flex flex-col gap-6 text-[white]">
      <div className="flex justify-between gap-6">
        <p className="text-2xl flex-grow text-left">
          部分時間有陽光。吹和緩偏東風。
        </p>
        <p className="bg-[rgba(0,0,0,0.1)] rounded-lg px-2 py-1">English</p>
      </div>
      <div className="flex justify-between gap-6">
        <div className="flex-grow flex flex-col gap-4">
          <div className="flex-grow flex items-center gap-4">
            <div className="grow flex flex-col">
              <div className="flex items-center gap-1">
                <p className="bg-[rgba(0,0,0,0.1)] rounded-lg px-2 py-1 text-3xl text-left">
                  青衣
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-5xl">24</p>
                <p className="text-3xl">°C</p>
              </div>
            </div>
            <div className="grow flex flex-col">
              <p className="text-xl text-left">體感氣溫</p>
              <div className="flex items-center gap-1">
                <p className="text-3xl">19</p>
                <p className="text-xl">°C</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-4 bg-[rgba(0,0,0,0.1)] p-4 rounded-lg">
            <div className="flex flex-col flex-grow gap-4">
              <div className="flex-grow flex flex-col">
                <p className="text-base text-left">相對濕度</p>
                <div className="flex items-center gap-1">
                  <p className="text-2xl">24</p>
                  <p className="text-base">%</p>
                </div>
              </div>
              <div className="flex-grow flex flex-col">
                <p className="text-base text-left">雨量</p>
                <div className="flex items-center gap-1">
                  <p className="text-2xl">0</p>
                  <p className="text-base">mm</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow gap-4">
              <div className="flex-grow flex flex-col">
                <p className="text-base text-left">風速</p>
                <div className="flex items-center gap-1">
                  <p className="text-2xl">18</p>
                  <p className="text-base">km/h</p>
                </div>
              </div>
              <div className="flex-grow flex flex-col">
                <p className="text-base text-left">紫外線指數</p>
                <div className="flex items-center gap-1">
                  <p className="text-2xl">7</p>
                  <p className="text-base">高</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <i className="wi wi-day-cloudy text-[176px] px-3 py-12 opacity-20"></i>
      </div>
    </div>
  );
}

export default Extension;
