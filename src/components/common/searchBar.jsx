import React, {Component} from "react";
import M from 'materialize-css';

export default class SearchBar extends Component {

    componentDidMount() {
        this.initSearchBar();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.initSearchBar();
    }

    initSearchBar = () => {
        const {data, onAutoComplete} = this.props;
        const autoFillData = {};
        data.map(d => autoFillData[d.name] = null);
        M.Autocomplete.init(this.autoComplete, {
            data:autoFillData,
            onAutocomplete: (e) => {onAutoComplete(e)}
        });
    };

    render() {
        const {name, label, value, width, onChange} = this.props;
        return (
            <div className={`input-field col ${width}`}>
                <i className="material-icons prefix">search</i>
                <input ref={(autoComplete) => this.autoComplete = autoComplete}
                       type="text"
                       name={name}
                       id={name}
                       value={value}
                       onChange={onChange}
                       className="autocomplete"/>

                <label htmlFor={name}>{label}</label>
            </div>
        );
    }

}