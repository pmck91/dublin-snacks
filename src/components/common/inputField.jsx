import React, {Component} from "react";

export default class InputField extends Component {
    render() {
        const {name, label, error, autoFocus, width, prefix, ...rest} = this.props;

        return (
            <div className={`input-field col s${width}`}>
                {prefix && <i className="material-icons prefix">{prefix}</i>}
                <input autoFocus={autoFocus ? autoFocus : false}
                       {...rest}
                       name={name}
                       className={error ? "invalid" : ""}
                       id={name}/>
                <label htmlFor={name}>{label}</label>
                <span className="helper-text" data-error={error} />
            </div>
        );
    }
}