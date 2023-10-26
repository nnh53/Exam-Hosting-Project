import React, { useState } from 'react'
import { Radio, Space } from 'antd'

export default function Question({ question, index }) {
  const [value, setValue] = useState(1)
  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    GetData()
    setValue(e.target.value)
  }

  const GetData = () => {
    fetch(`http://localhost:1880/quizz/1`)
      .then((res) => {
        console.log(res.json())
      })
      .then((data) => {
        console.log(data)
      })
  }

  const { content, answer } = question

  return (
    <div className='Question'>
      <h3>
        {index}. {content}
      </h3>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction='vertical'>
          <Radio value={1}>{answer[0].content}</Radio>
          <Radio value={2}>{answer[1].content}</Radio>
          <Radio value={3}>{answer[2].content}</Radio>
          <Radio value={4}>{answer[3].content}</Radio>
        </Space>
      </Radio.Group>

      {/* <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox onChange={onChange}>Checkbox</Checkbox> */}
    </div>
  )
}
