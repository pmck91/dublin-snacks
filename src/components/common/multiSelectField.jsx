import React, {Component} from "react";
import M from 'materialize-css';

export default class MultiSelectField extends Component {

    componentDidMount() {
        M.FormSelect.init(this.select);
    }

    render() {
        const {options, name, label, placeholder, width, prefix, error, onChange} = this.props;

        return (
            <div className={`input-field col ${width} invalid`}>
                {prefix && <i className="material-icons prefix">{prefix}</i>}
                <label className={"slider-label"} htmlFor={name}>{label}</label>
                <select className={"validate"} multiple name={name} onChange={onChange}
                        value={options[name]}
                        ref={(select) => {
                            this.select = select
                        }}>
                    <option value="" disabled>{placeholder}</option>
                    {options.map(option =>
                        <option
                            key={option._id}
                            value={option.name}>
                            {option.name}
                        </option>
                    )}
                </select>
                {error && <span className="select-error helper-text">{error}</span>}
            </div>
        );
    }
}