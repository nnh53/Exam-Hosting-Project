import React from 'react'

import './ScreenHomeRegister.scss'
import { Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import SubmitButton from '../../../components/Buttons/SubmitButton'
import { GetData } from '../../../utils/QuizService'

const App = () => {
  const nav = useNavigate()
  const [form] = Form.useForm()

  const onFinish = (values) => {
    message.success('Submit success!')

    // Access the user input data here
    const { 'Full Name': fullName, Email, 'Test ID': testId } = values

    if (GetData(testId)) {
      localStorage.setItem('fullName', JSON.stringify(fullName))
      localStorage.setItem('Email', JSON.stringify(Email))
      localStorage.setItem('testId', JSON.stringify(testId))
      //nav('/quiz')
    } else {
      message.error('Test not exist!')
    }
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

        <Form.Item
          name='Test ID'
          label='Test ID'
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
          <Input placeholder='Input Test ID' />
        </Form.Item>

        <Form.Item>
          <SubmitButton />
        </Form.Item>
      </Form>
    </div>
  )
}
export default App
