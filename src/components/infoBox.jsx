import React, {Component} from "react";
import IconInfoBox from "./iconInfoField";
import StarRatings from "react-star-ratings";

export default class InfoBox extends Component {

    render() {
        const {data, onClick, onChangeRating, onChangeSpeed, onChangePriceRange} = this.props;
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
                                content={
                                    <div className={"center"}>
                                        <StarRatings
                                            rating={data.speed}
                                            starRatedColor="red"
                                            starDimension="15px"
                                            starSpacing="3px"
                                            name={`${data._id}`}
                                            changeRating={onChangeSpeed}
                                            svgIconPath={"M0 2v11h3v9l7-12h-4l4-8z"}
                                            svgIconViewBox={"0 0 24 24"}
                                            numberOfStars={5}/>
                                    </div>
                                }/>

                            <IconInfoBox
                                icon={"euro"}
                                heading={"Cost"}
                                content={
                                    <div>
                                        <StarRatings
                                            rating={data.priceRange}
                                            starRatedColor="red"
                                            starDimension="15px"
                                            starSpacing="3px"
                                            name={`${data._id}`}
                                            changeRating={onChangePriceRange}
                                            svgIconPath={"M15,18.5c-2.51,0-4.68-1.42-5.76-3.5H15l1-2H8.58c-0.05-0.33-0.08-0.66-0.08-1s0.03-0.67,0.08-1H15l1-2H9.24 C10.32,6.92,12.5,5.5,15,5.5c1.61,0,3.09,0.59,4.23,1.57L21,5.3C19.41,3.87,17.3,3,15,3c-3.92,0-7.24,2.51-8.48,6H3l-1,2h4.06 C6.02,11.33,6,11.66,6,12s0.02,0.67,0.06,1H3l-1,2h4.52c1.24,3.49,4.56,6,8.48,6c2.31,0,4.41-0.87,6-2.3l-1.78-1.77 C18.09,17.91,16.62,18.5,15,18.5z"}
                                            svgIconViewBox={"0 0 24 24"}
                                            numberOfStars={5}/>
                                    </div>
                                }/>

                            <IconInfoBox
                                icon={"star"}
                                heading={"Rating"}
                                content={
                                    <div>
                                    <StarRatings
                                        rating={data.rating}
                                        starRatedColor="red"
                                        starDimension="15px"
                                        starSpacing="3px"
                                        name={`${data._id}`}
                                        changeRating={onChangeRating}
                                        numberOfStars={5}/>
                                    </div>
                                }/>

                            <IconInfoBox
                                icon={"event_seat"}
                                heading={"Eat In"}
                                content={<p><i className="material-icons">{data.sitDown ? "check" : "clear"}</i></p>}/>

                            <IconInfoBox
                                icon={"fastfood"}
                                heading={"Take Out"}
                                content={<p><i className="material-icons">{data.takeAway ? "check" : "clear"}</i></p>}/>

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