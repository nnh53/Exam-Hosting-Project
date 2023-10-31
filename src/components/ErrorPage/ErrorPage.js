import React from "react";
import img404 from "../../assets/404 not found.png";
import "./ErrorPage.scss";
import CustomButton from "../CustomButton";

export default function ErrorPage() {
  return (
    <div className="ErrorPage">
      <div className="image-container">
        <img src={img404} alt="error" />
      </div>
      <CustomButton text={"HOME"} linkTo={"/"} style={{ color: "blue", border: "none", fontweight: "600" }} />
    </div>
  );
}
