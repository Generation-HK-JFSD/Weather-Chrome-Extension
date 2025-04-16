function ForecastRow({ day, iconPath, minTemp, maxTemp, minRH, maxRH, PSR }) {
  return (
    <div className='grid grid-cols-4 gap-4 items-center'>
      <div className='flex gap-4 items-center'>
        <p className='text-base'>{day}</p>
        {/* <i className={`wi wi-${icon} text-2xl`}></i> */}

        {/* TODO CSS style for icon */}
        <img src={iconPath} />
      </div>
      <div className='flex items-center gap-1'>
        <p className='text-2xl'>
          {minTemp}~{maxTemp}
        </p>
        <p className='text-base'>°C</p>
      </div>

      <div className='flex items-center gap-1'>
        <p className='text-2xl'>
          {minRH}~{maxRH}
        </p>
        <p className='text-base'>%</p>
      </div>
      <div className='flex items-center gap-1'>
        <p className='text-2xl'>{PSR}</p>
        <p className='text-base'>%</p>
      </div>
    </div>
  );
}

export default ForecastRow;
