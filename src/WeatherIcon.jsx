import pathHelper from './utils/path';

function WeatherIcon({ iconNum }) {
  if (!iconNum) return <div>Data Missing</div>;

  const iconPath = pathHelper.getIconFullPath(iconNum);
  return <img src={iconPath} width='100px' />;
}

export default WeatherIcon;
