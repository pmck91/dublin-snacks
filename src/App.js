import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./components/home";
import ErrorPage from "./components/404";
import AddForm from "./components/addForm";

export default class App extends Component {


    render() {
        return (
            <div className="App">
                <NavBar/>

                <Switch>
                    <Route path={"/add"} component={AddForm}/>
                    <Route path={"/"} exact component={HomePage}/>
                    <Route path={"/404"} component={ErrorPage} />
                    <Redirect to="/404"/>
                </Switch>
            </div>
        );
    }
}