import { Button, ConfigProvider } from 'antd'
import React from 'react'

export default function SubmitButton() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            /* here is your component tokens */
            contentFontSize: 50,
            controlHeight: 80
          }
        }
      }}
    >
      <Button type='primary' htmlType='submit' className='SubmitButton'>
        Submit
      </Button>
    </ConfigProvider>
  )
}
