import React, { useEffect, useState } from 'react'
import { Checkbox } from 'antd'
import { addItemToLS, getAnswer } from '../utils/LocalStorageManagement'

export default function CheckboxCom({ question }) {
  const { quizId, answer, isMutiple } = question
  const [selectedValues, setSelectedValues] = useState([])
  const onChange = (e) => {
    const selectedValue = e.target.value
    const checked = e.target.checked
    if (checked) {
      // Nếu đã chọn, thêm giá trị vào mảng selectedValues
      setSelectedValues([...selectedValues, selectedValue])
    } else {
      // Nếu bỏ chọn, loại bỏ giá trị khỏi mảng selectedValues
      setSelectedValues(selectedValues.filter((value) => value !== selectedValue))
    }
    addItemToLS(quizId, e.target.value, isMutiple)
  }
  useEffect(() => {
    let ansList = getAnswer(quizId)
    if (ansList) {
      setSelectedValues([...ansList])
    }
  }, [])

  return (
    <div>
      {answer.map((item, index) => (
        <div style={{ margin: '10px 0' }} key={index}>
          <Checkbox value={item.ansId} checked={selectedValues.includes(item.ansId)} onChange={onChange}>
            {item.content}
          </Checkbox>
        </div>
      ))}
    </div>
  )
}
