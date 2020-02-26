import React from "react";
import Joi from "@hapi/joi";

import Form from "./common/form";

export default class AddForm extends Form {

    state = {
        data: {restaurant: "", address:"", url: "", cuisines: "", rating: 1, speed: 1, cost: 1, eatIn: false, takeOut: false},
        errors: {}
    };

    rawSchema = {
        restaurant: Joi.string().required().label("Restaurant Name"),
        address: Joi.string().required().label("Address"),
        url: Joi.string().uri().required().label("Url"),
        cuisines: Joi.string().required().label("Cuisines"),
        rating: Joi.number().integer().min(1).max(5).required().label("Initial Rating"),
        speed: Joi.number().integer().min(1).max(5).required().label("Initial Speed Rating"),
        cost: Joi.number().integer().min(1).max(5).required().label("Initial Cost Rating"),
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

                                {this.renderInput("restaurant", "Restaurant Name", "text", true, "fastfood")}
                                {this.renderInput("url", "Url", "text", false, "link")}

                                {this.renderInput("address", "Address", "text", false, "place", 12)}

                                {this.renderInput("speed", "Initial Speed Rating(1 to 5)", "number", false, "flash_on", 4)}
                                {this.renderInput("cost", "Initial Cost Rating (1 to 5)", "number", false, "euro", 4)}
                                {this.renderInput("rating", "Initial Rating (1 to 5)", "number", false, "star", 4)}

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

    doSubmit = () => {console.log("submitted")};

}