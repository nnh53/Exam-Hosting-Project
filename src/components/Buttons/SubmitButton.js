import React from "react";
import { Button, ConfigProvider } from "antd";

export default function SubmitButton({ linkTo }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            contentFontSize: 50,
            controlHeight: 80,
          },
        },
      }}
    >
      <Button type="primary" htmlType="submit" className="SubmitButton" href={linkTo}>
        Submit
      </Button>
    </ConfigProvider>
  );
}
