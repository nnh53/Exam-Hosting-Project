import React from "react";
import SmallForm from "../SmallForm/SmallForm";
import "./TestAlreadyStartNotification.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function TestAlreadyStartNotification() {
  const nav = useNavigate();

  const movingHandle = () => {
    nav("/quiz");
  };

  return (
    <div className="TestAlreadyStartNotification">
      <SmallForm>
        <h1>There is a test already started</h1>
        <p>If you submit another account, the old test will ended</p>

        <Button onClick={movingHandle}> Move back to Test</Button>
      </SmallForm>
    </div>
  );
}
