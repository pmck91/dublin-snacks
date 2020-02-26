import React, {Component} from "react";

export default class CheckboxField extends Component {

    render() {
        const {value, name, label, width, labelClasses, ...rest} = this.props;

        return (

            <div className={`input-field col ${width}`}>
                <label className={labelClasses}>
                    <input
                        {...rest}
                        checked={value}
                        id={name}
                        name={name}
                        type="checkbox"/>

                    <span>{label}</span>
                </label>
            </div>
        );
    }
}