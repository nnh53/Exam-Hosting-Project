import React from "react";
import { Button, ConfigProvider } from "antd";

export default function CustomButton({ text, type, classContent, linkTo, style }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            contentFontSize: 40,
            controlHeight: 70,
          },
        },
      }}
    >
      <Button className={classContent} type={type} href={linkTo} style={style}>
        {text}
      </Button>
    </ConfigProvider>
  );
}
