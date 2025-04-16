const API_BASE_URL =
  'https://data.weather.gov.hk/weatherAPI/opendata/weather.php';

const API_PATHS = {
  Current_Weather_Report: `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc`,
  Icon_Path_Template: `https://www.hko.gov.hk/images/HKOWxIconOutline/pic$1.png`,
  Nine_Day_Weather_Forecase:
    'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc',
  AQHI_of_Individual:
    'https://dashboard.data.gov.hk/api/aqhi-individual?format=json',
};

export default API_PATHS;
