import React from "react";
import { Button, ConfigProvider } from "antd";
import "./SubmitButton.scss";

export default function SubmitButton({ linkTo }) {
  return (
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
      <div className="container">
        <Button type="primary" htmlType="submit" className="SubmitButton" href={linkTo}>
          Submit
        </Button>
      </div>
    </ConfigProvider>
  );
}
