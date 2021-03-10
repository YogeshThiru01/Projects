import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as data from "./data";


export default function App() {

  const [viewport, setViewport] = useState({
    latitude: 13.011693,
    longitude: 80.235547,
    width: "100vw",
    height: "100vh",
    zoom: 15
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <>
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoieW9nZXNodGhpcnUwMSIsImEiOiJja2M0ZnljNWwwN2VuMnpvMHN0aXQ2b3YwIn0.siIjmOXC_agaoPPDciyjuA"
        mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={viewport => { setViewport(viewport); } } 
      >

        {data.locations.map(location => (
          <Marker 
          latitude = { location.geometry.coordinates[0] }
            longitude={location.geometry.coordinates[1]} >
            
            <button className="marker"
              onClick={e => {
                e.preventDefault();
                setSelectedLocation(location);
              }}
            >
             <img src="./marker.svg" alt="icon" />
            </button>
            </Marker>
       )
      )
       }

       {
          selectedLocation ? (
            <Popup
              latitude={selectedLocation.geometry.coordinates[0]}
              longitude={selectedLocation.geometry.coordinates[1]}
              onClose={() => { setSelectedLocation(null);}}
            >
              <div className="popupmenu">
                <h2>{selectedLocation.properties.NAME}</h2>
                <p><b>Address:</b>{selectedLocation.properties.PLACE}</p>
                <p>{selectedLocation.properties.SPACE}</p>
                <p><b>Phone no:</b>{selectedLocation.properties.PHONENO}</p>
                <p><b>Website:</b>{selectedLocation.properties.WEBSITE}</p>
              </div>
              </Popup>
         ):null
       }
        
      </ReactMapGL>

    </>
  );
}


