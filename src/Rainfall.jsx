import helper from './utils/helper';

function Rainfall({ rainData, selectedLocation }) {
  //   console.log('rainData', rainData);
  //   console.log('selectedLocation', selectedLocation);

  let maxRainfallDisplay = 'No Data';

  if (rainData && rainData.length > 0) {
    let filter = rainData.filter(
      (el) => el.place === helper.districtToArea(selectedLocation)
    );

    if (filter.length === 1) {
      if (filter[0].main === 'TRUE') {
        maxRainfallDisplay = 'Under Maintenance';
      } else {
        maxRainfallDisplay = filter[0].max;
      }
    }
  }

  return (
    <div>
      Rainfall: {maxRainfallDisplay} mm <br />
      {/* debug selectedLocation: {selectedLocation} */}
    </div>
  );
}

export default Rainfall;
