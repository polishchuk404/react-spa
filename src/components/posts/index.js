import React from "react";
import { Switch, Route } from "react-router-dom";

import Posts from "./components/Posts/Posts";

export default function PostsLink(){
  return(
      <Switch>
          <Route exact path='/posts' component = {Posts}/>
      </Switch>
  )
};