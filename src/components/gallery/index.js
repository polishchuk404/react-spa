import React from "react";
import { Switch, Route } from "react-router-dom";

import Gallery from "./components/photos";


export default function GalleryLink(){
    return(
        <Switch>
            <Route exact path='/gallery' component = {Gallery}/>
        </Switch>
    )
};