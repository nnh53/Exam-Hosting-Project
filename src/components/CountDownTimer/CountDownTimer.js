import React from "react";
import { Statistic } from "antd";
import { useLocation } from "react-router-dom";
const { Countdown } = Statistic;

export default function CountDownTimer(time) {
  return (
    <div style={{ position: "fixed", top: "20px", right: "20px" }}>
      <Countdown value={time.time} format="HH:mm:ss" />
    </div>
  );
}
