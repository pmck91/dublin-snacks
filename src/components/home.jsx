import React, {Component} from "react";
import CuisineFilter from "./cuisineFilter";
import Map from "./map";
import InfoBox from "./infoBox";
import mockData from "../mockData";
import SearchBar from "./common/searchBar";

export default class HomePage extends Component {

    R3 = {
        latitude: 53.331602,
        longitude: -6.264853
    };

    state = {
        data: [],
        cuisines: [
            {_id: "1", name: "Middle Eastern"},
            {_id: "2", name: "Hipster"},
            {_id: "3", name: "Chicken"},
        ],
        selectedCuisine: null,
        selectedData: {name: ""},
        searchTerm: "",
        mapData: {
            viewport: {
                latitude: this.R3.latitude,
                longitude: this.R3.longitude,
                zoom: 14
            },
            r3Marker: this.R3,
            popupInfo: null,
            data: [],
            events: {},
            width: "100%",
            height: "50vh"
        }
    };

    componentDidMount() {
        this.setState({data: mockData})
    }

    render() {
        const {selectedData, selectedCuisine, cuisines, searchTerm, mapData, data} = this.state;
        mapData.data = this.filter();
        console.log(data);

        return (
            <React.Fragment>
                <Map mapData={mapData}
                     onClick={this.handleClick}
                     onViewportChange={this.handleViewPortChange}
                     onMouseEnter={this.handleMouseEnter}
                     onR3MouseEnter={this.handleR3MouseEnter}
                     onMouseExit={this.handleMouseExit}/>

                <br/>

                <div className="container no-pad-bot">
                    <div className="row">
                        <CuisineFilter options={cuisines} width={"s6"}
                                       onSelect={this.handleSelect}
                                       selected={selectedCuisine}/>
                        <SearchBar
                            name={"search"}
                            label={"Search Snack Peddlers"}
                            value={searchTerm}
                            width={"s6"}
                            data={data}
                            onChange={this.handleSearch}
                            onAutoComplete={this.handleAutoComplete}/>
                    </div>
                </div>

                <InfoBox data={selectedData}
                         onClick={this.handleSelect}
                         onChangeRating={this.handleChangeRating}
                         onChangeSpeed={this.handleChangeSpeed}
                         onChangePriceRange={this.handleChangePriceRange}/>
            </React.Fragment>
        )
    }

    filter = () => {
        if (this.state.selectedCuisine) {

            const {selectedCuisine} = this.state;

            return this.state.data
                .filter((snackDispensary) =>
                    snackDispensary.cuisines.some((c) => c._id === selectedCuisine._id))
                .map(snackDispensary => {
                    return Object.assign({}, snackDispensary, {cuisines: snackDispensary.cuisines});
                });
        }
        return this.state.data;
    };

    handleViewPortChange = viewport => {
        const {mapData} = this.state;
        mapData.viewport = viewport;
        this.setState({mapData});
    };

    handleMouseEnter = data => {
        const {mapData} = this.state;
        mapData.popupInfo = {
            title: data.name,
            latitude: data.latitude,
            longitude: data.longitude
        };
        this.setState({mapData});
    };

    handleR3MouseEnter = () => {
        const {mapData} = this.state;
        mapData.popupInfo = {
            title: 'R3',
            latitude: mapData.r3Marker.latitude,
            longitude: mapData.r3Marker.longitude
        };
        this.setState({mapData});
    };

    handleMouseExit = () => {
        const {mapData} = this.state;
        mapData.popupInfo = null;
        this.setState({mapData});
    };

    handleSearch = event => {
        const {mapData} = this.state;
        mapData.viewport.latitude = this.R3.latitude;
        mapData.viewport.longitude = this.R3.longitude;
        const searchTerm = event.currentTarget.value;
        this.setState({searchTerm, mapData, selectedCuisine: null, selectedData: {}});
    };

    handleAutoComplete = searchTerm => {
        const matchingData = this.state.data.filter(d => d.name === searchTerm);
        let selectedData = {};
        if (matchingData.length > 0) {
            selectedData = matchingData[0];
            const {latitude, longitude} = selectedData;
            const {mapData} = this.state;
            mapData.viewport.latitude = latitude;
            mapData.viewport.longitude = longitude;
            this.setState({searchTerm, selectedData, selectedCuisine: null, mapData});
        }
    };

    handleClick = selectedData => {
        const {mapData} = this.state;
        const {viewport} = mapData;

        mapData.viewport = {
            latitude: selectedData.latitude,
            longitude: selectedData.longitude,
            zoom: viewport.zoom
        };
        this.setState({selectedData, mapData});
    };

    handleChangeRating(newRating, name) {
        console.log("name", name);
        console.log("new rating", newRating);
    }

    handleChangeSpeed(newRating, name) {
        console.log("name", name);
        console.log("new speed", newRating);
    }

    handleChangePriceRange(newRating, name) {
        console.log("name", name);
        console.log("new price", newRating);
    }

    handleSelect = selectedCuisineId => {
        const selectedCuisine = this.state.cuisines.find(c => c._id === selectedCuisineId);

        if (selectedCuisine) {
            this.setState({selectedCuisine, selectedData: {}, searchTerm: ""});
        } else {
            this.setState({selectedCuisine: null, selectedData: {}, searchTerm: ""})
        }
    };
}