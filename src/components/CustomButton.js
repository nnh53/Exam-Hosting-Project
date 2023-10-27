import React from 'react'
import { Button, ConfigProvider, Space } from 'antd'

export default function CustomButton({ text, type, classContent, linkTo }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            contentFontSize: 40,
            controlHeight: 70
          }
        }
      }}
    >
      <Space wrap>
        <Button className={classContent} type={type} href={linkTo}>
          {text}
        </Button>
      </Space>
    </ConfigProvider>
  )
}
