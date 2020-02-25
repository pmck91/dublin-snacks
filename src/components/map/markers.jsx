import React, {Component} from "react";
import R3Pin from "./r3special/r3Pin";
import {Marker} from "react-map-gl";
import Pin from "./pin";

export default class Markers extends Component {
    render() {

        const {data} = this.props;

        return(
          <React.Fragment>
              { data.map(location =>
                  <Marker
                      longitude={location.longitude}
                      latitude={location.latitude}
                      offsetTop={-30}
                      offsetLeft={-15}
                  >
                      <Pin size={30}/>
                  </Marker>
              )}
          </React.Fragment>
        );
    }
}