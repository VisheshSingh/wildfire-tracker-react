import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({ center, zoom, eventData }) => {
  const markers = eventData.map((e) => {
    if (e.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={e.geometries[0].coordinates[1]}
          lng={e.geometries[0].coordinates[0]}
        />
      );
    }
  });
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBEmNdm5TCA6i-vvYauZtdJZ2kEGpouF6k' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
