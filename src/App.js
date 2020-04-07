import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/header";
import Contactslink from "./components/contacts";
import PostsLink from "./components/posts";
import HomeLink from "./components/home";
import GalleryLink from "./components/gallery";

export default function App() {
  return (
    <Router>
        <Header />
        <Switch>
         <Route path="/posts">
            <PostsLink />
          </Route>
          <Route path="/contacts">
            <Contactslink />
          </Route>
          <Route path="/gallery">
            <GalleryLink />
          </Route>
          <Route exact path="/">
            <HomeLink />
          </Route>
        </Switch>
    </Router>
  );
}


