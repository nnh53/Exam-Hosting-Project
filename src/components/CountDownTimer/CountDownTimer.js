import React from "react";
import { Statistic } from "antd";
import { useLocation } from "react-router-dom";
const { Countdown } = Statistic;

export default function CountDownTimer() {
  // Calculate the target time (20 minutes from now)

  const location = useLocation();

  const testTimeFromNow = location.state.now;

  return (
    <div style={{ position: "fixed", top: "20px", right: "20px" }}>
      <Countdown value={testTimeFromNow} format="HH:mm:ss" />
    </div>
  );
}
