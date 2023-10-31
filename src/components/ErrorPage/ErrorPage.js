import React from "react";
import img404 from "../../assets/404 not found.png";
import "./ErrorPage.scss";

export default function ErrorPage() {
  return (
    <div className="ErrorPage">
      <div className="image-container">
        <img src={img404} alt="error" />
      </div>
    </div>
  );
}
