import pathHelper from './utils/path';

function WeatherIcon({ iconNum, className }) {
  if (!iconNum) return <div>未有更新</div>;
  const iconPath = pathHelper.getIconFullPath(iconNum);

  return <img src={iconPath} className={className} draggable='false' />;
}

export default WeatherIcon;
