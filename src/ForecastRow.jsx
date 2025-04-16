function ForecastRow({ day, iconPath, minTemp, maxTemp, minRH, maxRH, PSR }) {
  return (
    <div className='grid grid-cols-4 gap-4 items-center'>
      <div className='flex justify-between items-center'>
        <p className='text-base'>{day}</p>
        {/* <i className={`wi wi-${icon} text-2xl`}></i> */}

        <img
          src={iconPath}
          className='h-8 filter grayscale'
          draggable='false'
        />
      </div>
      <div className='flex items-center gap-1'>
        <p className='text-xl'>
          {minTemp}~{maxTemp}
        </p>
        <p className='text-base'>°C</p>
      </div>

      <div className='flex items-center gap-1'>
        <p className='text-xl'>
          {minRH}~{maxRH}
        </p>
        <p className='text-base'>%</p>
      </div>
      <div className='flex items-center gap-1'>
        <p className='text-xl'>{PSR}</p>
        <p className='text-base'>%</p>
      </div>
    </div>
  );
}

export default ForecastRow;
