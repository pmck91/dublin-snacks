import React, {Component} from 'react';
import MapGL, {Marker, NavigationControl} from 'react-map-gl';
import Pin from "./map/pin";
import ControlPanel from './control-panel';

import {FaMapPin} from 'react-icons/fa';
import R3Marker from "./map/r3special/r3Marker";


const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};
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
            marker1: {
                latitude: 53.3308172,
                longitude: -6.264853
            },
            events: {}
        };
    }

    _updateViewport = viewport => {
        this.setState({viewport});
    };

    render() {

        const {r3Marker, marker1, viewport} = this.state;

        return (
            <MapGL
                {...this.state.viewport}
                width="100vw"
                height="45vh"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={viewport => this.setState({viewport})}
                mapboxApiAccessToken={'pk.eyJ1IjoicG1jazkxIiwiYSI6ImNrNzJlNTQxOTAxYnUzZW1pc21rZHd5dnMifQ.Iu7Tz0M3bDRlHlQDN07Dvg'}>

                <R3Marker r3Marker={r3Marker} onClick={this.handleR3Click}/>

            </MapGL>
        );
    }

    handleR3Click = () => {
        console.log('r3 click');
    };


}

//53.3313197,-6.265215