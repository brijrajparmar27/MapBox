import * as turf from '@turf/turf';
import { useContext, useEffect, useRef, useState } from 'react';
import Map from 'react-map-gl';
import { LocationsContext } from '../Providers/LocationsContext';
import { ClusterLayer } from './Layers/ClusterLayer';
import { PolygonLayer } from './Layers/PolygonLayer';
import { polygons } from '../assets/polygons';

export const MapComponent = ({ theme }) => {
  const { locations, setSelectedLocation } = useContext(LocationsContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(locations);
  }, [locations]);

  const mapRef = useRef();

  const [viewport, setViewport] = useState({
    longitude: -1.143842,
    latitude: 52.630238,
    zoom: 14,
  });

  const jumpTo = ({ latitude, longitude, zoom = viewport.zoom }) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 2000,
      zoom,
    });
  };

  const updateViewPort = (evt) => setViewport(evt.viewState);

  const dropPin = (pin) => {
    setSelectedLocation(pin);
    const arrayContainsDroppedPin = data.find((item) => item.temp);
    if (arrayContainsDroppedPin) {
      setData((prev) =>
        prev.map((each) => {
          return each.temp ? pin : each;
        })
      );
    } else {
      setData((prev) => [...prev, pin]);
    }
    jumpTo({
      zoom: 15,
      latitude: pin.location.latitude,
      longitude: pin.location.longitude,
    });
  };

  const checkInsidePolygon = (pin) => {
    var point = turf.point([pin.location.longitude, pin.location.latitude]);
    let polygonslist = polygons.features.map(
      (each) => each.geometry.coordinates
    );
    console.log(polygonslist);
    const isInsideOne = polygonslist.reduce((acc, val) => {
      console.log(turf.booleanWithin(point, turf.polygon(val)));

      if (!acc) {
        const polygon = turf.polygon(val);
        if (turf.booleanWithin(point, polygon)) {
          acc = true;
        }
      }
      return acc;
    }, false);
    return isInsideOne;
  };

  const handleMarkerDrop = (evt) => {
    const pin = {
      id: Math.round(Math.random() * 100000),
      location: {
        latitude: evt.lngLat.lat,
        longitude: evt.lngLat.lng,
      },
      temp: true,
    };
    const isInside = checkInsidePolygon(pin);
    if (isInside) {
      dropPin(pin);
    } else {
      alert('Pin Dropped Outside Acceptable Zone');
    }
  };

  return (
    <Map
      {...viewport}
      ref={mapRef}
      mapboxAccessToken={import.meta.env.VITE_MAPBOXKEY}
      mapStyle={theme.url}
      onMove={updateViewPort}
      onClick={handleMarkerDrop}
      onLoad={() =>
        setViewport({
          longitude: -1.143842,
          latitude: 52.630238,
          zoom: 14,
        })
      }
    >
      <PolygonLayer />
      <ClusterLayer
        viewport={viewport}
        mapRef={mapRef}
        jumpTo={jumpTo}
        data={data}
      />
    </Map>
  );
};
