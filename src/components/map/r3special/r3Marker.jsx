import React, {Component} from "react";
import {Marker} from "react-map-gl";
import R3Pin from "./r3Pin";

export default class R3Marker extends Component {
    render() {
        const {r3Marker, onClick} = this.props;

        return (
            <Marker
                longitude={r3Marker.longitude}
                latitude={r3Marker.latitude}
                offsetTop={-50}
                offsetLeft={-25}
            >
                <R3Pin onClick={onClick}/>
            </Marker>
        );
    }
}