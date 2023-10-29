import React from "react";
import { Statistic } from "antd";
import { testTime } from "../../constants/testTime";
const { Countdown } = Statistic;

export default function CountDownTimer() {
  // Calculate the target time (20 minutes from now)
  const now = new Date();
  now.setMinutes(now.getMinutes() + testTime);

  return (
    <div style={{ position: "fixed", top: "20px", right: "20px" }}>
      <Countdown value={now} format="HH:mm:ss" />
    </div>
  );
}
