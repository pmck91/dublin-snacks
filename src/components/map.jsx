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
                latitude: 53.331602,
                longitude: -6.264853,
                zoom: 15
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

        const {r3Marker} = this.state;
        const {data, onClick} = this.props;

        return (
            <MapGL
                {...this.state.viewport}
                width="100%"
                height="45vh"
                maxWidth={"100%"}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={viewport => this.setState({viewport})}
                mapboxApiAccessToken={'pk.eyJ1IjoicG1jazkxIiwiYSI6ImNrNzJlNTQxOTAxYnUzZW1pc21rZHd5dnMifQ.Iu7Tz0M3bDRlHlQDN07Dvg'}>

                <R3Marker r3Marker={r3Marker} onMouseEnter={this.handleR3MouseEnter} onMouseExit={this.handleMouseExit}/>

                <Markers data={data} onClick={onClick} onMouseEnter={this.handleMouseEnter} onMouseExit={this.handleMouseExit}/>

                {this._renderPopup()}
            </MapGL>
        );
    }

    _renderPopup() {
        const {popupInfo} = this.state;

        return (
            popupInfo && (
                <Popup
                    anchor="top"
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    closeOnClick={false}
                    closeButton={false}
                    onClose={() => this.setState({popupInfo: null})}
                >
                    <div>
                        <p>{popupInfo.title}</p>
                    </div>
                </Popup>
            )
        );
    }

    handleMouseEnter = data => {
        this.setState({
            popupInfo: {
                title: data.name,
                latitude: data.latitude,
                longitude: data.longitude
            }
        });
    };

    handleR3MouseEnter = () => {
        const {r3Marker} = this.state;
        this.setState({
            popupInfo: {
                title: 'R3',
                latitude: r3Marker.latitude,
                longitude: r3Marker.longitude
            }
        });
    };

    handleMouseExit = () => {
        this.setState({
            popupInfo: null
        });
    }
}