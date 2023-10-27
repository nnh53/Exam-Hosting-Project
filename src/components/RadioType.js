import { Radio, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { addItemToLS, getAnswer } from '../utils/LocalStorageManagement'

export default function RadioType({ question }) {
  const { quizId, answer, isMultiple } = question
  //   console.log(quizId, answer)
  const [value, setValue] = useState(0)

  const onChange = (e) => {
    setValue(e.target.value)
    addItemToLS(quizId, e.target.value, isMultiple)
  }

  useEffect(() => {
    if (getAnswer(quizId)) {
      let ansId = getAnswer(quizId)[0]
      setValue(ansId)
    }
  }, [])

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction='vertical'>
        {answer.map((item, index) => (
          <Radio key={index} value={item.ansId}>
            {item.content}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  )
}
