import React, {Component} from "react";
import M from 'materialize-css';

export default class CuisineFilter extends Component {

    state = {
        select: null
    };

    // initialise the select on mount
    componentDidMount() {
        M.FormSelect.init(this.select);
    }

    // update the selected value on filter
    componentDidUpdate(prevProps, prevState, snapshot) {
        M.FormSelect.init(this.select);
    }

    render() {
        const {options, selected, onSelect} = this.props;
        const selectedVal = selected ? selected._id : "";

        return (
            <div className={"container"}>
                <div className="input-field col s12">
                    <select onChange={e => onSelect(e.target.value)}
                            value={selectedVal}
                            ref={(select) => {this.select = select}} >
                        <option value="" disabled>Filter By Cuisine</option>
                        <option value="-1">All</option>
                        {options.map(option =>
                            <option
                                key={option._id}
                                value={option._id}>
                                {option.name}
                            </option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}