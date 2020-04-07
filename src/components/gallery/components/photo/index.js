import React from "react";

import "./photo.scss";

export default function Photo(props) {
    const { photos } = props;  
    return (
        <div className="photo">
            <img src={photos.photo} alt=""/>
        </div>
    );
  }