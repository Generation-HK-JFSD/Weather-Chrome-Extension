import pathHelper from './utils/Path';

function WeatherIcon({ iconNum }) {
  if (!iconNum) return <div>Data Missing</div>;

  const iconPath = pathHelper.getIconFullPath(iconNum);
  return <img src={iconPath} width='100px' />;
}

export default WeatherIcon;
