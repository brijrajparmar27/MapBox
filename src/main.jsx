import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import App from './test/App1.jsx';
import './index.css';
import { LocationsProvider } from './Providers/LocationsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LocationsProvider>
    <App />
  </LocationsProvider>
);
