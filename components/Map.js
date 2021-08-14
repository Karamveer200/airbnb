import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const coordinates = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const center = getCenter(coordinates);
  const [selectedLocation, setSelectedLocation] = useState("");

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/karamveer200/cksb6v0v80m8d18mmie3eegux/draft"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      {searchResults.map((item, index) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(item)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === item.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation("")}
              latitude={item.lat}
              longitude={item.long}
              className=" px-2 py-2 z-50"
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
