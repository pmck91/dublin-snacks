import React, {Component} from "react";

export default class IconInfoBox extends Component {

    render() {

        const {icon, heading, content} = this.props;

        return (
            <div className="col s12 m2">
                <div className="icon-block">
                    <h2 className="center light-blue-text"><i
                        className="material-icons">{icon}</i>
                    </h2>
                    <h5 className="center">{heading}</h5>
                    <div className={"center"}>{content}</div>
                </div>
            </div>
        );
    }
}