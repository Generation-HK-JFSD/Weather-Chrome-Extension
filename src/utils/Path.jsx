import API_PATHS from '../constants/api';

/**
 * @param {string} iconNum icon id string
 * @returns {string} full path of the icon image
 */
function getIconFullPath(iconNum) {
  const iconPath = API_PATHS.Icon_Path_Template.replace('$1', iconNum);
  return iconPath;
}

const pathHelper = { getIconFullPath };

export default pathHelper;
