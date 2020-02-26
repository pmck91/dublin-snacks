import React, {Component} from 'react';
import './App.css';
import data from './mockData';
import NavBar from "./components/navbar";
import Map from "./components/map";
import InfoBox from "./components/infoBox";
import CuisineFilter from "./components/cuisineFilter";

export default class App extends Component {

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
            <div className="App">
                <NavBar/>
                <CuisineFilter options={cuisines} onSelect={this.handleSelect} selected={selectedCuisine}/>
                <Map data={filteredData} onClick={this.handleClick}/>
                <InfoBox data={selectedData} onClick={this.handleSelect}/>
            </div>
        );
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


    handleSelect = selectedCuisineId => {
        const selectedCuisine = this.state.cuisines.find(c => c._id === selectedCuisineId);

        if (selectedCuisine) {
            this.setState({selectedCuisine, selectedData:{}});
        } else {
            this.setState({selectedCuisine: null, selectedData:{}})
        }

        console.log(selectedCuisine);
    };

}