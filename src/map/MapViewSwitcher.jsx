import { mapStyles } from '../assets/mapstyles';

export const MapViewSwitcher = ({ MapStyle, setMapStyle }) => {
  const handleMapStyleChange = (style) => setMapStyle(style);
  return (
    <div className="mapsContain">
      {mapStyles.map((each) => {
        return (
          <div
            key={each.id}
            className={
              MapStyle.id === each.id
                ? 'selected mapthumbContain'
                : 'mapthumbContain'
            }
            onClick={() => {
              handleMapStyleChange(each);
            }}
          >
            <img src={each.img} alt="" height={'40px'} />
          </div>
        );
      })}
    </div>
  );
};
