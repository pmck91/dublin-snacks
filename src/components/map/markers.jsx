import React, {Component} from "react";
import {Marker} from "react-map-gl";
import Pin from "./pin";

export default class Markers extends Component {
    render() {

        const {data, onClick} = this.props;

        return (
            <React.Fragment>
                {data.map(location =>
                    <div key={location._id}>
                        <Marker
                            longitude={location.longitude}
                            latitude={location.latitude}
                            offsetTop={-30}
                            offsetLeft={-15}
                        >
                            <Pin size={30} data={location} onClick={onClick}/>
                        </Marker>
                    </div>
                )}
            </React.Fragment>
        );
    }
}