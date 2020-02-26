import React, {Component} from "react";
import IconInfoBox from "./iconInfoField";
import _ from 'lodash';

export default class InfoBox extends Component {

    render() {
        const {data, onClick} = this.props;
        if (data.url) {
            return (
                <div className="section">
                    <div className="container">

                        <div><h3 className="header center orange-text">{data.name}</h3>
                            <div className="row center">
                                <ul className={"list-inline"}>
                                    {data.cuisines.map(c => <li key={c._id}>
                                        <button
                                            onClick={() => onClick(c._id)}
                                            className="waves-effect waves-light btn red">{c.name}</button>
                                    </li>)}
                                </ul>
                                <a href={data.url} rel="noopener noreferrer" target={"_blank"}
                                   className={"btn waves-effect waves-light blue"}><i
                                    className="material-icons right">link</i>website</a>
                            </div>
                        </div>

                        <div className="row">

                            <IconInfoBox
                                icon={"flash_on"}
                                heading={"Speed"}
                                content={data.speed + "/5"}/>

                            <IconInfoBox
                                icon={"euro"}
                                heading={"Cost"}
                                content={_(data.priceRange).times(n => <i key={n}
                                                                          className="material-icons">euro</i>)}/>

                            <IconInfoBox
                                icon={"star"}
                                heading={"Rating"}
                                content={(data.ratings.reduce(
                                    (a, b) => a + b, 0) / data.ratings.length).toFixed(1) + "/5"}/>

                            <IconInfoBox
                                icon={"event_seat"}
                                heading={"Eat In"}
                                content={<i className="material-icons">{data.sitDown ? "check" : "clear"}</i>}/>

                            <IconInfoBox
                                icon={"fastfood"}
                                heading={"Take Out"}
                                content={<i className="material-icons">{data.takeAway ? "check" : "clear"}</i>}/>

                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    <div><h3 className="header center orange-text">Please Select a Map Item</h3>
                        <div className="row center">
                            Information will be displayed here
                        </div>
                    </div>
                </React.Fragment>
            )
        }

    }

}