import React, {Component} from 'react';
import MapGL, {Popup} from 'react-map-gl';
import R3Marker from "./map/r3special/r3Marker";
import data from '../mockData';
import Markers from "./map/markers";

export default class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 53.3314443,
                longitude: -6.2653022,
                zoom: 14
            },
            r3Marker: {
                latitude: 53.331602,
                longitude: -6.264853
            },
            data: data,
            events: {},
            popupInfo: null
        };
    }

    render() {

        const {r3Marker, data, viewport} = this.state;

        return (
            <MapGL
                {...this.state.viewport}
                width="100vw"
                height="45vh"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={viewport => this.setState({viewport})}
                mapboxApiAccessToken={'pk.eyJ1IjoicG1jazkxIiwiYSI6ImNrNzJlNTQxOTAxYnUzZW1pc21rZHd5dnMifQ.Iu7Tz0M3bDRlHlQDN07Dvg'}>

                <R3Marker r3Marker={r3Marker} onClick={this.handleR3Click}/>

                <Markers data={data}/>

                {this._renderPopup()}

            </MapGL>
        );
    }

    _renderPopup() {
        const {popupInfo} = this.state;

        return (
            popupInfo && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popupInfo.marker.longitude}
                    latitude={popupInfo.marker.latitude}
                    closeOnClick
                    onClose={() => this.setState({popupInfo: null})}
                >
                    <div>
                        <h4>{popupInfo.header}</h4>
                        {popupInfo.body && <p>{popupInfo.body}</p>}
                    </div>
                </Popup>
            )
        );
    }

    handleR3Click = () => {
        const {r3Marker} = this.state;
        this.setState({
            popupInfo: {
                header: 'Our lovely office <3',
                marker: r3Marker
            }
        });
    };
}