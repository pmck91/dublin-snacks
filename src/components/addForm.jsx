import React from "react";
import Joi from "@hapi/joi";

import Form from "./common/form";

export default class AddForm extends Form {

    state = {
        data: {
            restaurant: "",
            address: "",
            url: "",
            cuisines: "",
            rating: 3,
            speed: 2,
            cost: 1,
            eatIn: false,
            takeOut: false
        },
        cuisines: [{_id: 1, name: "Middle Eastern"},
            {_id: 2, name: "Hipster"},
            {_id: 3, name: "Chicken"}],
        errors: {},
        selectedVal: ""
    };

    rawSchema = {
        restaurant: Joi.string().required().label("Restaurant Name"),
        address: Joi.string().required().label("Address"),
        url: Joi.string().uri().required().label("Url"),
        cuisines: Joi.string().required().label("Cuisines"),
        rating: Joi.number().min(1).max(5).required().label("Initial Rating"),
        speed: Joi.number().min(1).max(5).required().label("Initial Speed Rating"),
        cost: Joi.number().min(1).max(5).required().label("Initial Cost Rating"),
        eatIn: Joi.boolean(),
        takeOut: Joi.boolean()
    };

    schema = Joi.object(this.rawSchema).options({allowUnknown: true});

    render() {
        return (

            <div className={"container"}>
                <div className="section">
                    <h2 className={"center"}>Add a new snack hole.</h2>
                </div>
                <div className="section">
                    <div className="row">
                        <form onSubmit={this.handleSubmit} className="col s12">
                            <div className="row">
                                {this.renderInput("restaurant", "Restaurant Name", "text", true, "fastfood", "s6")}
                                {this.renderInput("url", "Url", "text", false, "link", "s6")}

                            </div>
                            <div className="row">
                                {this.renderMultiSelect("cuisines", "Cuisines", "Select Cuisines", this.state.cuisines, "restaurant","s12")}
                            </div>
                            <div className="row">
                                {this.renderInput("address", "Address", "text", false, "place", "s8")}
                                {this.renderCheckbox("eatIn", "Eat In", "padding-left-checkbox", "checkbox checkbox-red", "s2")}
                                {this.renderCheckbox("takeOut", "Take Out", "", "checkbox checkbox-red", "s2")}
                            </div>
                            <div className="row">
                                {this.renderRange("speed", "Initial Speed Rating", 1, 5, "flash_on", "s4")}
                                {this.renderRange("cost", "Initial Cost Rating", 1, 5, "euro", "s4")}
                                {this.renderRange("rating", "Initial Rating", 1, 5, "star", "s4")}
                            </div>

                            <div className="row">
                                {this.renderButton("Save")}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    doSubmit = () => {
        console.log("submitted")
    };

}