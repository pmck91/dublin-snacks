import React, {Component} from "react";
import logo from '../logo.svg';
import M from 'materialize-css';
import {Link} from "react-router-dom";

export default class NavBar extends Component {

    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }

    render() {
        return (
            <nav className="white lighten-1" role="navigation">
                <div className="nav-wrapper container"><a id="logo-container valign-wrapper" href="/" className="brand-logo"><img
                    src={logo} width={35} alt={"R3 logo"}/></a>
                    <ul className="right hide-on-med-and-down ">
                        <li><Link to="/add" className={"black-text"}>Add A Snack Dispensary</Link></li>
                    </ul>

                    <ul ref={(sidenav) => {
                        this.sidenav = sidenav
                    }} id="nav-mobile" className="sidenav">
                        <li><Link to={"/add"}>Add A Snack Dispensary</Link></li>
                    </ul>

                    <a href="/" data-target="nav-mobile" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                </div>
            </nav>
        );
    }
}