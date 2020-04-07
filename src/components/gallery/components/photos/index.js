import React, { Component }  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import "./photos.sass";
import {photoList} from "../photo-list";
import Photo from "../photo";

class Gallery extends Component {
    state = { photoList };
    render() {
      return (
        <div className="container">
            <h1>Gallery</h1>
            <div className="row">
              {
              photoList.map(photos => (
                  <div className="col-sm-6 ml-auto mr-auto">
                      <Photo key={photos.photo} photos={photos} />
                  </div>
                ))
              }
            </div>
        </div>
      );
    }
  }
  
  export default Gallery;