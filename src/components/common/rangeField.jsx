import React, {Component} from "react";
import M from 'materialize-css';

export default class RangeField extends Component {

    componentDidMount() {
        M.Range.init(this.range);
    }

    render() {
        const {name, label, width, prefix, ...rest} = this.props;

        return (
            <div className={`input-field col ${width}`}>
                {prefix && <i className="material-icons prefix range-icon">{prefix}</i>}
                <label htmlFor={name} className={"slider-label"}>{label}</label>
                <p className="range-field">
                    <input ref={(range) => {
                        this.range = range
                    }} type="range" name={name} id={name} {...rest}/>
                </p>
            </div>
        );
    }
}