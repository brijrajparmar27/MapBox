import streets from './streets.png';
import dark from './dark.png';
import light from './light.png';
import navigday from './navig-day.png';
import navignight from './navig-night.png';
import outdoors from './outdoors.png';
import satellitestreet from './satellite-street.png';
import satellite from './satellite.png';

export const mapStyles = [
  {
    id: 0,
    name: 'Streets',
    url: 'mapbox://styles/mapbox/streets-v12',
    img: streets,
  },
  {
    id: 1,
    name: 'Outdoors',
    url: 'mapbox://styles/mapbox/outdoors-v12',
    img: outdoors,
  },
  {
    id: 2,
    name: 'Light',
    url: 'mapbox://styles/mapbox/light-v11',
    img: light,
  },
  {
    id: 3,
    name: 'Dark',
    url: 'mapbox://styles/mapbox/dark-v11',
    img: dark,
  },
  {
    id: 4,
    name: 'Satellite',
    url: 'mapbox://styles/mapbox/satellite-v9',
    img: satellite,
  },
  {
    id: 5,
    name: 'Satellite Street',
    url: 'mapbox://styles/mapbox/satellite-streets-v12',
    img: satellitestreet,
  },
  {
    id: 6,
    name: 'Navigation Day',
    url: 'mapbox://styles/mapbox/navigation-day-v1',
    img: navigday,
  },
  {
    id: 7,
    name: 'Navigation Night',
    url: 'mapbox://styles/mapbox/navigation-night-v1',
    img: navignight,
  },
];
