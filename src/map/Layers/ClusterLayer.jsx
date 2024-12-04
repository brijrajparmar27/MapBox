import { Marker } from 'react-map-gl';
import useSupercluster from 'use-supercluster';

export const ClusterLayer = ({ viewport, mapRef, data, jumpTo }) => {
  const bounds = mapRef?.current?.getMap().getBounds().toArray().flat() || null;

  const points = data.map((crime) => ({
    type: 'Feature',
    properties: {
      cluster: false,
      crimeId: crime.id,
      category: crime.category,
      temp: !!crime.temp,
    },
    geometry: {
      type: 'Point',
      coordinates: [crime.location.longitude, crime.location.latitude],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds: bounds,
    options: { radius: 25, maxZoom: 14 },
  });

  return (
    <>
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;
        if (isCluster) {
          return (
            <Marker key={cluster.id} latitude={latitude} longitude={longitude}>
              <div
                style={{
                  backgroundColor: 'blue',
                  color: 'white',
                  borderRadius: '100px',
                  height: `${20 + (pointCount / points.length) * 40}px`,
                  width: `${20 + (pointCount / points.length) * 40}px`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    14
                  );
                  jumpTo({ latitude, longitude, zoom: expansionZoom });
                }}
              >
                <p>{pointCount}</p>
              </div>
            </Marker>
          );
        }

        return (
          <Marker
            key={cluster.properties.crimeid}
            latitude={latitude}
            longitude={longitude}
          >
            <img
              src="/marker.svg"
              height="20px"
              className={cluster.properties.temp ? 'bounce2' : ''}
            />
          </Marker>
        );
      })}
    </>
  );
};
