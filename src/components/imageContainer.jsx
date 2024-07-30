import React from "react";
import "./imageContainer.css";

const imageContainer = ({photos}) => {
  return (
    <div className="imageWrapper">
        {photos.map((photo) => (
          <div key={photo.id} className="imageItem">
            <img src={photo.urls.small} alt="issue displaying"/>
            </div>
        ))}
    </div>
  );
};

export default imageContainer