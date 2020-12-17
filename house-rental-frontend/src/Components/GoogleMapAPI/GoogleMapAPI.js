import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 21.037096,
            lng: 105.782663
        },
        zoom: 18
    };

    render() {
        return (
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
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
}

export default SimpleMap;