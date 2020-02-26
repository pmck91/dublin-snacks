import React, {Component} from "react";
import Joi from '@hapi/joi';
import InputField from "./inputField";
import CheckboxField from "./checkboxField";
// import SelectField from "./selectField";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    handleSubmit = event => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        this.doSubmit();
    };

    validate = () => {
        const errors = {};
        const {data} = this.state;
        const result = this.schema.validate(data, {abortEarly: false});
        if (!result.error) return null;
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    };

    validateProperty = ({name, value}) => {
        const propertyValidatorSchema = Joi.object({
            [name]: this.rawSchema[name]
        }).options({allowUnknown: true});
        return propertyValidatorSchema.validate({[name]: value});
    };

    handleChange = event => {
        const errors = {...this.state.errors};
        const result = this.validateProperty(event.currentTarget);

        if (result.error) {
            errors[event.currentTarget.name] = result.error.details[0].message;
        } else delete errors[event.currentTarget.name];

        const data = {...this.state.data};
        if (event.currentTarget.type === "checkbox") {
            data[event.currentTarget.name] = !data[event.currentTarget.name];
        } else {
            data[event.currentTarget.name] = event.currentTarget.value;
        }
        this.setState({data, errors});
    };

    renderInput = (name, label, type, autoFocus = false, prefix, width=6) => {
        const {data, errors} = this.state;
        return (
            <InputField autoFocus={autoFocus}
                        type={type}
                        name={name}
                        label={label}
                        value={data[name]}
                        width={width}
                        error={errors[name]}
                        prefix={prefix}
                        onChange={this.handleChange}/>
        );
    };

    // renderSelect = (name, label, options) => {
    //     const {data, errors} = this.state;
    //     return <SelectField name={name}
    //                         value={data[name]}
    //                         label={label}
    //                         options={options}
    //                         error={errors[name]}
    //                         onChange={this.handleChange}/>
    // };

    renderCheckbox = (name, label) => {
        const {data, errors} = this.state;
        return (
            <CheckboxField name={name}
                           value={data[name]}
                           onChange={this.handleChange}
                           error={errors[name]}
                           label={label}/>
        );
    };

    renderButton = (label) => {
        return (
            <div className={"form-group"}>
                <button type={"submit"} disabled={this.validate()} className={"btn btn-primary"}>{label}</button>
            </div>
        );
    }
}

export default Form