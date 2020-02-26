import React, {Component} from "react";

class CheckboxField extends Component {
    render() {
        const {value, name, label, error, ...rest} = this.props;

        return (
            <div className={"form-check form-group"}>
                <input
                    {...rest}
                    checked={value}
                    type={"checkbox"}
                    id={name}
                    name={name}
                    className={"form-check-input"}/>
                <label htmlFor={name} className={"form-check-label"}>{label ? label : name.capitalize()}</label>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        );
    }
}

export default CheckboxField;