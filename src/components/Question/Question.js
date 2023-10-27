import React, { useState } from 'react'
import { Radio, Space } from 'antd'
import './Question.scss'
import { addItemToLS } from '../../utils/LocalStorageManagement'

export default function Question({ question, index }) {
  const { quizId, content, answer } = question

  const [value, setValue] = useState(0)
  const onChange = (e) => {
    setValue(e.target.value)
    addItemToLS(quizId, answer[e.target.value - 1].ansId)
  }

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
