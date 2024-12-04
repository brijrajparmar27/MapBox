import { Layer, Source } from 'react-map-gl';
import { polygons } from '../../assets/polygons';

export const PolygonLayer = () => {
  const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
      'fill-color': {
        property: 'percentile',
        stops: [
          [0, 'rgba(50, 136, 189, 0.25)'],
          [1, 'rgba(102, 194, 165, 0.25)'],
          [2, 'rgba(171, 221, 164, 0.25)'],
          [3, 'rgba(230, 245, 152, 0.25)'],
          [4, 'rgba(255, 255, 191, 0.25)'],
          [5, 'rgba(254, 224, 139, 0.25)'],
          [6, 'rgba(253, 174, 97, 0.25)'],
          [7, 'rgba(244, 109, 67, 0.25)'],
          [8, 'rgba(213, 62, 79, 0.25)'],
        ],
      },
      'fill-opacity': 0.8,
    },
  };

  return (
    <Source type="geojson" data={polygons}>
      <Layer {...dataLayer} />
    </Source>
  );
};
