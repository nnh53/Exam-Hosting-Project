import { ConfigProvider, Result } from "antd";
import React from "react";
import { useLocation } from "react-router";
import "./ScreenAnswer.scss";
import CustomButton from "../../components/CustomButton";

export default function ScreenAnswer() {
  const location = useLocation();
  const { score } = location.state;

  return (
    <div className="ScreenAnswer">
      <div className="resContainer">
        <ConfigProvider
          theme={{
            components: {
              Result: {
                subtitleFontSize: "35px",
                titleFontSize: "50px",
                iconFontSize: "100px",
                extraMargin: "auto",
                colorTextDescription: "red",
              },
            },
          }}
        >
          <Result
            status="success"
            title="Submit Successfully"
            subTitle={`Your score: ${score}`}
            extra={[<CustomButton key="100" text="Try Again" linkTo="/" type="primary" style={{ margin: "2rem" }} />]}
          />
        </ConfigProvider>
      </div>
    </div>
  );
}
