import React, {Component} from 'react';
import MapGL, {Popup} from 'react-map-gl';
import R3Marker from "./map/r3special/r3Marker"
import Markers from "./map/markers";

export default class Map extends Component {

    render() {

        const {onClick, onViewportChange, onMouseEnter, onR3MouseEnter, onMouseExit} = this.props;
        const {r3Marker, viewport, width, height, data} = this.props.mapData;

        return (
            <MapGL
                {...viewport}
                width={width}
                height={height}
                maxWidth={"100%"}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={vp => onViewportChange(vp)}
                mapboxApiAccessToken={'pk.eyJ1IjoicG1jazkxIiwiYSI6ImNrNzJlNTQxOTAxYnUzZW1pc21rZHd5dnMifQ.Iu7Tz0M3bDRlHlQDN07Dvg'}>

                <R3Marker r3Marker={r3Marker} onMouseEnter={onR3MouseEnter} onMouseExit={onMouseExit}/>

                <Markers data={data} onClick={onClick} onMouseEnter={onMouseEnter} onMouseExit={onMouseExit}/>

                {this._renderPopup()}
            </MapGL>
        );
    }

    _renderPopup() {
        const {popupInfo} = this.props.mapData;
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
}