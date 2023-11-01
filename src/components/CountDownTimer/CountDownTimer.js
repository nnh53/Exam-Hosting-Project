import React from "react";
import { Statistic } from "antd";
import { useLocation } from "react-router-dom";
const { Countdown } = Statistic;

export default function CountDownTimer({ time, onFinish }) {
  console.log("time: ", time);

  return (
    <div style={{ position: "fixed", top: "20px", right: "20px" }}>
      <Countdown value={time} format="HH:mm:ss" onFinish={onFinish} />
    </div>
  );
}
