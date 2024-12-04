import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import './App.css';
import { MapComponent } from './map/MapComponent';
import { mapStyles } from './assets/mapstyles';
import { MapViewSwitcher } from './map/MapViewSwitcher';
import { MapForm } from './form/MapForm';

function App() {
  const [MapStyle, setMapStyle] = useState(mapStyles[0]);

  return (
    <div className="App">
      <div className="box">
        <MapForm />
        <div className="mapWrapper">
          <MapComponent theme={MapStyle} />
          <MapViewSwitcher MapStyle={MapStyle} setMapStyle={setMapStyle} />
        </div>
      </div>
    </div>
  );
}

export default App;
