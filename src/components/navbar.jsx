import React, {Component} from "react";
import M from 'materialize-css';

export default class NavBar extends Component {

    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }

    render() {
        return (
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Navbar Link</a></li>
                    </ul>

                    <ul ref={(sidenav) => {
                        this.sidenav = sidenav
                    }} id="nav-mobile" className="sidenav">
                        <li><a href="/">Navbar Link</a></li>
                    </ul>

                    <a href="/" data-target="nav-mobile" className="sidenav-trigger"><i
                        className="material-icons">menu</i></a>
                </div>
            </nav>
        );
    }
}