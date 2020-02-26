import React, {Component} from "react";
import CuisineFilter from "./cuisineFilter";
import Map from "./map";
import InfoBox from "./infoBox";
import data from "../mockData";

export default class HomePage extends Component {

    state = {
        data: [],
        cuisines: [
            {_id: "1", name: "Middle Eastern"},
            {_id: "2", name: "Hipster"},
            {_id: "3", name: "Chicken"},
        ],
        selectedCuisine: null,
        selectedData: {name: ""}
    };

    componentDidMount() {
        this.setState({data});
    }

    render() {
        const {selectedData, selectedCuisine, cuisines} = this.state;
        const filteredData = this.filter();

        return (
            <React.Fragment>
                <CuisineFilter options={cuisines} onSelect={this.handleSelect} selected={selectedCuisine}/>
                <Map data={filteredData} onClick={this.handleClick}/>
                <InfoBox data={selectedData} onClick={this.handleSelect} onChangeRating={this.handleChangeRating}
                         onChangeSpeed={this.handleChangeSpeed} onChangePriceRange={this.handleChangePriceRange}/>
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
        return this.state.data
    };

    handleClick = selectedData => {
        this.setState({selectedData});
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
            this.setState({selectedCuisine, selectedData: {}});
        } else {
            this.setState({selectedCuisine: null, selectedData: {}})
        }

        console.log(selectedCuisine);
    };
}