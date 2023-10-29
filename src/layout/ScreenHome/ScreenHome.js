import React from "react";
import "./ScreenHome.scss";
import Title from "../../components/Title/Title";
import BigForm from "../../components/BigForm/BigForm";
import ScreenHomeRegister from "./ScreenHomeRegister/ScreenHomeRegister";

export default function ScreenHome() {
  return (
    <div className="ScreenHome">
      <header className="header">
        <Title />
      </header>
      <BigForm>
        <ScreenHomeRegister />
      </BigForm>
    </div>
  );
}
