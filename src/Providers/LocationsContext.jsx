import { createContext, useEffect, useState } from 'react';
import { locationsData } from '../assets/data';

export const LocationsContext = createContext();

export const LocationsProvider = ({ children }) => {
  const [locations, setLocations] = useState(locationsData);
  const [selectedLocation, setSelectedLocation] = useState({});
  useEffect(() => {
    console.log(locations, 'locations');
  }, [locations]);
  useEffect(() => {
    console.log(selectedLocation, 'selected location');
  }, [selectedLocation]);
  return (
    <LocationsContext.Provider
      value={{ locations, setLocations, selectedLocation, setSelectedLocation }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
