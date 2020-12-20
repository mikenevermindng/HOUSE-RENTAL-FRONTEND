import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


function SimpleMap(props) {
    const defaultProps = {
        center: {
            lat: 21.037096,
            lng: 105.782663
        },
        zoom: 18
    };

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
                // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {/*<AnyReactComponent*/}
                {/*    lat={59.955413}*/}
                {/*    lng={30.337844}*/}
                {/*    text="My Marker"*/}
                {/*/>*/}
            </GoogleMapReact>
        </div>
    );
}

export default SimpleMap;