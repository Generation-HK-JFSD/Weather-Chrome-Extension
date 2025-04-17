function Data({ param, value, unit }) {
  return (
    <div className='flex flex-col'>
      <p className='text-base text-left'>{param}</p>
      <div className='flex items-center gap-1'>
        <p className='text-2xl'>{value}</p>
        <p className='text-base'>{unit}</p>
      </div>
    </div>
  );
}

export default Data;
