function Data({ param, value, unit }) {
  return (
    <div className='flex flex-col'>
      <p className='text-sm text-left'>{param}</p>
      <div className='flex items-center gap-1'>
        <p className='text-xl'>{value}</p>
        <p className='text-sm'>{unit}</p>
      </div>
    </div>
  );
}

export default Data;
