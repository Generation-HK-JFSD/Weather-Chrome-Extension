import pathHelper from './utils/path';

function WeatherIcon({ iconNum, className }) {
  if (!iconNum) return <div>Data Missing</div>;
  const iconPath = pathHelper.getIconFullPath(iconNum);

  return <img src={iconPath} className={className} />;
}

export default WeatherIcon;
