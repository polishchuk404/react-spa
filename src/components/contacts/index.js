import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";


export default function Contactslink(){
    return(
        <Switch>
            <Route exact path='/contacts' component = {Contacts}/>
        </Switch>
    )
};