import React from "react";
import { Button, ConfigProvider } from "antd";

export default function CustomButton({ text, type, classContent, linkTo, style, onClick, index }) {
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
      <Button key={index} className={classContent} type={type} href={linkTo} style={style} onClick={onClick}>
        {text}
      </Button>
    </ConfigProvider>
  );
}
