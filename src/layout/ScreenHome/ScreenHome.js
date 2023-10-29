import React from "react";
import "./ScreenHome.scss";
import ScreenHomeBigForm from "./ScreenHomeBigForm/ScreenHomeBigForm";
import Title from "../../components/Title/Title";

export default function ScreenHome() {
  return (
    <div className="container">
      <header className="header">
        <Title />
      </header>
      <ScreenHomeBigForm />
    </div>
  );
}
