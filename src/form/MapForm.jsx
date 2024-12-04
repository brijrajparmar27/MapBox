import { useContext } from 'react';
import { LocationsContext } from '../Providers/LocationsContext';

export const MapForm = () => {
  const { selectedLocation, setLocations, setSelectedLocation } =
    useContext(LocationsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocations((prev) => [...prev, { ...selectedLocation, temp: false }]);
    setSelectedLocation({});
  };

  return (
    <form className="map-form" onSubmit={handleSubmit}>
      <p className="label">Latitude</p>
      <input
        type="text"
        name="lat"
        className="textbox"
        disabled
        value={selectedLocation?.location?.latitude || ''}
      />
      <p className="label">Longitude</p>
      <input
        type="text"
        name="long"
        className="textbox"
        disabled
        value={selectedLocation?.location?.longitude || ''}
      />
      <input type="submit" value="Submit" className="submitbutton" />
    </form>
  );
};
