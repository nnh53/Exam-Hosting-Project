import React from 'react'

import './ScreenHomeRegister.scss'
import { Form, Input, message } from 'antd'
import SubmitButton from '../../Button/SubmitButton'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const nav = useNavigate()
  const [form] = Form.useForm()
  const onFinish = () => {
    message.success('Submit success!')
    nav('/quiz')
  }
  const onFinishFailed = () => {
    message.error('Submit failed!')
  }

  return (
    <div className='ScreenHomeRegister'>
      <Form form={form} layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
        <Form.Item
          name='Full Name'
          label='Full Name'
          rules={[
            {
              required: true
            },
            {
              type: 'string',
              min: 6
            }
          ]}
        >
          <Input placeholder='Input your Full Name' />
        </Form.Item>

        <Form.Item
          name='Email'
          label='Email'
          rules={[
            {
              required: true
            },
            {
              type: 'email',
              min: 6
            }
          ]}
        >
          <Input placeholder='Input your Email' />
        </Form.Item>

        <Form.Item>
          <SubmitButton />
        </Form.Item>
      </Form>
    </div>
  )
}
export default App
