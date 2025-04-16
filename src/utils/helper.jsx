function districtToArea(district) {
  let area;

  switch (district) {
    case '京士柏':
    case '香港天文台':
      area = '油尖旺';
      break;

    case '黃竹坑':
    case '赤柱':
      area = '南區';
      break;

    case '打鼓嶺':
      area = '北區';
      break;

    case '大埔':
    case '大美督':
      area = '大埔';
      break;

    case '沙田':
      area = '沙田';
      break;

    case '屯門':
      area = '屯門';
      break;

    case '將軍澳':
      area = '西貢';
      break;

    case '長洲':
    case '赤鱲角':
      area = '離島區';
      break;

    case '青衣':
      area = '葵青';
      break;

    case '荃灣可觀':
    case '荃灣城門谷':
      area = '荃灣';
      break;

    case '香港公園':
      area = '中西區';
      break;

    case '筲箕灣':
      area = '東區';
      break;

    case '九龍城':
    case '啟德跑道公園':
      area = '九龍城';
      break;

    case '跑馬地':
      area = '灣仔';
      break;

    case '黃大仙':
      area = '黃大仙';
      break;

    case '觀塘':
      area = '觀塘';
      break;

    case '深水埗':
      area = '深水埗';
      break;

    case '元朗公園':
    case '流浮山':
    case '石崗':
      area = '元朗';
      break;

    default:
      area = '油尖旺';
      break;
  }

  return area;
}

// accoording user's selected location, return
// nearest location of Air Quality Monitoring
function nearestAirQualityMonitoringLocation(location) {
  let res;

  switch (location) {
    case '京士柏':
    case '香港天文台':
      res = 'Mong Kok';
      break;

    case '黃竹坑':
    case '赤柱':
      res = 'Mong Kok';
      break;

    case '打鼓嶺':
      res = 'North';
      break;

    case '大埔':
    case '大美督':
      res = 'Tai Po';
      break;

    case '沙田':
      res = 'Sha Tin';
      break;

    case '屯門':
      res = 'Tuen Mun';
      break;

    case '將軍澳':
      res = 'Tseung Kwan O';
      break;

    case '長洲':
    case '赤鱲角':
      res = 'Tung Chung';
      break;

    case '青衣':
      res = 'Kwai Chung';
      break;

    case '荃灣可觀':
    case '荃灣城門谷':
      res = 'Tsuen Wan';
      break;

    case '香港公園':
      res = 'Central/Western';
      break;

    case '筲箕灣':
      res = 'Eastern';
      break;

    case '九龍城':
    case '啟德跑道公園':
    case '黃大仙':
      res = 'Mong Kok';
      break;

    case '觀塘':
      res = 'Kwun Tong';
      break;

    case '跑馬地':
      res = 'Causeway Bay';
      break;

    case '深水埗':
      res = 'Sham Shui Po';
      break;

    case '元朗公園':
    case '流浮山':
    case '石崗':
      res = 'Yuen Long';
      break;

    default:
      res = 'Mong Kok';
      break;
  }

  return res;
}

function qahi_healthRiskToChinese(string) {
  string = string.toLowerCase();

  let res;
  switch (string) {
    case 'low':
      res = '低';
      break;
    case 'moderate':
      res = '中';
      break;
    case 'high':
      res = '高';
      break;
    case 'very high':
      res = '甚高';
      break;
    case 'serious':
      res = '嚴重';
      break;
    default:
      res = '-';
      break;
  }

  return res;
}

function isObjectEmpty(obj) {
  if (typeof obj !== 'object') throw new Error('It is not object');

  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

const helper = {
  districtToArea,
  isObjectEmpty,
  nearestAirQualityMonitoringLocation,
  qahi_healthRiskToChinese,
};

export default helper;
