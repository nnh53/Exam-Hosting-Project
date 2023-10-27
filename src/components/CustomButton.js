import React from 'react'
import './CustomButton.scss'
import { ConfigProvider } from 'antd'

export default function CustomButton({ text, isSuccess, classContent }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            /* here is your component tokens */
          }
        }
      }}
    >
      <button
        className={classContent}
        style={{
          background: isSuccess ? 'Green' : 'Red'
        }}
      >
        {text}
      </button>
    </ConfigProvider>
  )
}
