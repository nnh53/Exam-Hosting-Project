import React from "react";
import SmallForm from "../SmallForm/SmallForm";
import "./TestAlreadyStartNotification.scss";
import { Button, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import { getUserInfor } from "../../utils/LocalStorageManagement";
import { useTimerContext } from "../TimerContext";

export default function TestAlreadyStartNotification() {
  const nav = useNavigate();
  const { userTimer } = useTimerContext();

  const movingHandle = () => {
    const { userInfo, testQuestions } = getUserInfor();
    console.log(userTimer);
    nav("/quiz", { state: { testQuestions, userInfo, now: userTimer } });
  };

  return (
    <div className="TestAlreadyStartNotification">
      <h1>There is a test already started</h1>
      <p>If you submit another account, the old test will ended</p>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              contentFontSize: 30,
              controlHeight: 50,
            },
          },
        }}
      >
        <div className="centerButton">
          <Button type="primary" onClick={movingHandle}>
            Move back to Test
          </Button>
        </div>
      </ConfigProvider>
    </div>
  );
}
